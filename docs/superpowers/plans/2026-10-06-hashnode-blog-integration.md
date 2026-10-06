# Hashnode Blog Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate a headless blog into the Astro portfolio using Hashnode's GraphQL API.

**Architecture:** Fetch posts at build time using Astro's SSG capabilities and display them using Tailwind Typography for styling.

**Tech Stack:** Astro, Tailwind CSS, GraphQL (via fetch API).

**Spec:** `docs/superpowers/specs/2026-10-06-hashnode-blog-integration-design.md`

## Global Constraints
- Do not use third-party GraphQL client libraries (use native `fetch`).
- Maintain Astro as a Static Site Generator (SSG) - no server-side rendering (SSR) adapters should be added.
- All styles must use Tailwind CSS.

---

### Task 1: Setup Tailwind Typography

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs` (or tailwind config depending on setup)

**Interfaces:**
- Produces: Tailwind `prose` class available globally.

- [ ] **Step 1: Install `@tailwindcss/typography`**

```bash
npm install @tailwindcss/typography
```

- [ ] **Step 2: Configure Tailwind**

Update `astro.config.mjs` or `tailwind.config.mjs` to include the typography plugin. Since this project uses `@tailwindcss/vite` directly in `astro.config.mjs`, we need to add the plugin if applicable, or if it's Tailwind v4, we add it to the CSS file.
*Wait, Tailwind CSS v4 handles plugins differently (in the main css file). Let's assume the user has an `app.css` or we just rely on standard Vite plugin setup.*
Let's add it to `package.json` and configure it in the main CSS file or config.
For this task, let's assume we configure it in `src/styles/global.css` for Tailwind V4, or standard plugin if v3.

```css
/* If using Tailwind v4, in the main css file, usually src/styles/global.css or similar: */
@plugin "@tailwindcss/typography";
```
*(If the file doesn't exist, create it and import it in `astro.config.mjs` or the main layout).*
Let's instruct the worker to update `package.json` and the CSS file.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install and configure tailwindcss typography"
```

### Task 2: Create Hashnode Fetch Utility

**Files:**
- Create: `src/utils/hashnode.ts`
- Create: `tests/hashnode.test.ts` (if vitest is available, otherwise skip)

**Interfaces:**
- Produces: `getHashnodePosts()`, `getHashnodePost(slug: string)`

- [ ] **Step 1: Write the minimal implementation**

```typescript
// src/utils/hashnode.ts

const HASHNODE_API = 'https://gql.hashnode.com/';
const PUBLICATION_HOST = 'kea.hashnode.dev'; // Replace with actual host later or via env

export async function getHashnodePosts() {
  const query = `
    query Publication {
      publication(host: "${PUBLICATION_HOST}") {
        posts(first: 10) {
          edges {
            node {
              title
              slug
              brief
              coverImage { url }
              readTimeInMinutes
              publishedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();
  return data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
}

export async function getHashnodePost(slug: string) {
  const query = `
    query Publication {
      publication(host: "${PUBLICATION_HOST}") {
        post(slug: "${slug}") {
          title
          content { html }
          coverImage { url }
          publishedAt
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();
  return data?.publication?.post || null;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/utils/hashnode.ts
git commit -m "feat: add hashnode graphql fetch utilities"
```

### Task 3: Create the Blog Roll Page

**Files:**
- Create: `src/pages/blog/index.astro`

**Interfaces:**
- Consumes: `getHashnodePosts()` from `src/utils/hashnode.ts`

- [ ] **Step 1: Write the Blog Roll page**

```astro
---
// src/pages/blog/index.astro
import { getHashnodePosts } from '../../utils/hashnode';

const posts = await getHashnodePosts();
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Blog</title>
  </head>
  <body class="bg-white text-gray-900 max-w-4xl mx-auto p-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <div class="grid gap-6">
      {posts.map((post: any) => (
        <article class="border p-6 rounded-lg shadow-sm">
          <h2 class="text-2xl font-semibold mb-2">
            <a href={`/blog/${post.slug}`} class="hover:underline">{post.title}</a>
          </h2>
          <p class="text-gray-600 mb-4">{post.brief}</p>
          <div class="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()} • {post.readTimeInMinutes} min read
          </div>
        </article>
      ))}
    </div>
  </body>
</html>
```

- [ ] **Step 2: Check rendering**

Run: `npm run build` or `npm run dev` and navigate to `/blog`. Ensure it compiles without error.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/index.astro
git commit -m "feat: create blog roll page"
```

### Task 4: Create the Article Page

**Files:**
- Create: `src/pages/blog/[slug].astro`

**Interfaces:**
- Consumes: `getHashnodePosts()` and `getHashnodePost(slug)` from `src/utils/hashnode.ts`

- [ ] **Step 1: Write the dynamic route component**

```astro
---
// src/pages/blog/[slug].astro
import { getHashnodePosts, getHashnodePost } from '../../utils/hashnode';

export async function getStaticPaths() {
  const posts = await getHashnodePosts();
  return posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
}

const { slug } = Astro.params;
const post = await getHashnodePost(slug);

if (!post) {
  throw new Error(`Post not found for slug: ${slug}`);
}
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{post.title}</title>
  </head>
  <body class="bg-white text-gray-900 max-w-3xl mx-auto p-8">
    <a href="/blog" class="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Blog</a>
    
    <article class="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div class="text-gray-500 mb-8">
        {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      
      {post.coverImage?.url && (
        <img src={post.coverImage.url} alt={`Cover for ${post.title}`} class="mb-8 rounded-lg" />
      )}
      
      <div set:html={post.content.html} />
    </article>
  </body>
</html>
```

- [ ] **Step 2: Verify static generation**

Run: `npm run build`
Expected: Astro logs that it built `/blog/[slug]` pages successfully.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/[slug].astro
git commit -m "feat: create dynamic article page with typography styles"
```
