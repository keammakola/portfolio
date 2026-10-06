# Hashnode Blog Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate a headless blog into the Astro portfolio using Hashnode's RSS feed.

**Architecture:** Fetch posts from the RSS feed at build time using Astro's SSG capabilities, parse the XML, and display them using Tailwind Typography for styling.

**Tech Stack:** Astro, Tailwind CSS, `rss-parser`.

**Spec:** `docs/superpowers/specs/2026-10-06-hashnode-blog-integration-design.md`

## Global Constraints
- Maintain Astro as a Static Site Generator (SSG) - no server-side rendering (SSR) adapters should be added.
- All styles must use Tailwind CSS.

---

### Task 1: Setup Tailwind Typography

(Completed)

### Task 2: Create Hashnode RSS Fetch Utility

**Files:**
- Modify: `package.json`
- Modify: `src/utils/hashnode.ts`

**Interfaces:**
- Produces: `getHashnodePosts()`, `getHashnodePost(slug: string)`

- [ ] **Step 1: Install `rss-parser`**

```bash
npm install rss-parser
```

- [ ] **Step 2: Rewrite the minimal implementation for RSS**

Replace the existing GraphQL logic in `src/utils/hashnode.ts` with RSS parsing.

```typescript
// src/utils/hashnode.ts
import Parser from 'rss-parser';

const HASHNODE_RSS_URL = 'https://kea.hashnode.dev/rss.xml'; // Replace with actual later
const parser = new Parser();

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  return Math.ceil(noOfWords / wordsPerMinute);
}

export async function getHashnodePosts() {
  const feed = await parser.parseURL(HASHNODE_RSS_URL);
  
  return feed.items.map((item) => {
    // Hashnode RSS puts the slug at the end of the link
    const slug = item.link?.split('/').filter(Boolean).pop() || '';
    
    return {
      title: item.title,
      slug: slug,
      brief: item.contentSnippet?.substring(0, 150) + '...',
      content: item['content:encoded'] || item.content,
      readTimeInMinutes: calculateReadTime(item['content:encoded'] || item.content || ''),
      publishedAt: item.pubDate,
    };
  });
}

export async function getHashnodePost(slug: string) {
  const posts = await getHashnodePosts();
  return posts.find(post => post.slug === slug) || null;
}
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json src/utils/hashnode.ts
git commit -m "feat: refactor hashnode fetch utility to use RSS"
```

### Task 3: Update the Blog Roll Page

**Files:**
- Modify: `src/pages/blog/index.astro`

**Interfaces:**
- Consumes: `getHashnodePosts()` from `src/utils/hashnode.ts`

- [ ] **Step 1: Update the Blog Roll page**

Make sure it correctly uses the new RSS data structure. (The structure returned by the RSS utility is mostly compatible, but verify no GraphQL-specific fields like `coverImage.url` are breaking it).

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

Run: `npm run build` to ensure it compiles without error and fetches from the RSS feed successfully.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/index.astro
git commit -m "fix: update blog roll to consume RSS data"
```

### Task 4: Create the Article Page

**Files:**
- Create/Modify: `src/pages/blog/[slug].astro`

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
      
      <div set:html={post.content} />
    </article>
  </body>
</html>
```

- [ ] **Step 2: Verify static generation**

Run: `npm run build`
Expected: Astro logs that it built `/blog/[slug]` pages successfully using the RSS data.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/[slug].astro
git commit -m "feat: create dynamic article page with typography styles (RSS)"
```
