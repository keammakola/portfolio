# Hashnode Blog Integration Design

## Objective
Integrate a headless blog into the Astro portfolio using Hashnode as the CMS and content distribution platform. The portfolio will remain a statically generated site (SSG) for maximum performance, while articles are written and managed on Hashnode.

## Architecture

### 1. Data Source (Hashnode GraphQL API)
- **API Endpoint:** `https://gql.hashnode.com/`
- **Query Structure:** We will use a standard `fetch` request to POST GraphQL queries. We will query the `publication` node using your Hashnode host (e.g., `yourusername.hashnode.dev`) to fetch the `posts`.
- **Required Fields:** Title, slug, brief (for the list view), cover image, read time, published date, and the full HTML content (for the individual article view).

### 2. Routing (Astro)
- **Blog Roll (`src/pages/blog/index.astro`):** A page displaying a list or grid of the latest posts.
- **Article Page (`src/pages/blog/[slug].astro`):** A dynamic route. We will use Astro's `getStaticPaths()` to fetch all posts at build time and generate a dedicated, static HTML page for each post.

### 3. Styling (Tailwind Typography)
- **Plugin:** We will install `@tailwindcss/typography` via npm and add it to `package.json` / Tailwind config.
- **Implementation:** Hashnode returns post content as raw HTML. We will wrap this HTML in a container with the `prose` class (Tailwind Typography's signature class). This automatically styles all headings, paragraphs, blockquotes, and code blocks to match a clean, readable design.

### 4. Configuration
- We will define the Hashnode Publication Host (e.g., `kea.hashnode.dev`) in a configuration file or directly in the fetch utility so it can be easily updated. No private API keys are required since public posts are openly accessible via the API.

## Data Flow
1. Developer runs `npm run build` (or visits a page in `dev` mode).
2. Astro executes the GraphQL fetch function against `gql.hashnode.com`.
3. The JSON response is parsed and the data is passed as props to the Astro page components.
4. Astro generates the final static HTML.
