# Hashnode Blog Integration Design

## Objective
Integrate a headless blog into the Astro portfolio using Hashnode as the CMS and content distribution platform. The portfolio will remain a statically generated site (SSG) for maximum performance, while articles are written and managed on Hashnode.

## Architecture

### 1. Data Source (Hashnode RSS Feed)
- **Data Endpoint:** `https://yourusername.hashnode.dev/rss.xml`
- **Data Fetching:** We will fetch the XML feed and use a lightweight RSS parser (like `rss-parser` or `fast-xml-parser`) to extract the posts.
- **Required Fields:** Title, link/slug, description/brief, published date, and the full HTML content (for the individual article view). Note: RSS feeds do not natively provide read times without parsing the text, so we will calculate an estimated read time locally.

### 2. Routing (Astro)
- **Blog Roll (`src/pages/blog/index.astro`):** A page displaying a list or grid of the latest posts.
- **Article Page (`src/pages/blog/[slug].astro`):** A dynamic route. We will use Astro's `getStaticPaths()` to fetch all posts via RSS at build time and generate a dedicated, static HTML page for each post.

### 3. Styling (Tailwind Typography)
- **Plugin:** We will install `@tailwindcss/typography` via npm and add it to `package.json` / Tailwind config.
- **Implementation:** The RSS feed provides post content as raw HTML. We will wrap this HTML in a container with the `prose` class (Tailwind Typography's signature class). This automatically styles all headings, paragraphs, blockquotes, and code blocks to match a clean, readable design.

### 4. Configuration
- We will define the Hashnode RSS Feed URL (e.g., `https://kea.hashnode.dev/rss.xml`) in a configuration file or directly in the fetch utility.

## Data Flow
1. Developer runs `npm run build`.
2. Astro executes the RSS fetch function against the Hashnode RSS URL.
3. The XML response is parsed into JavaScript objects.
4. The data is passed as props to the Astro page components.
5. Astro generates the final static HTML.
