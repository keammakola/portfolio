# Portfolio Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the current single-file HTML portfolio to a modern, component-based Astro architecture using the provided template.

**Architecture:** We will use a Config-Driven approach where `src/config.ts` serves as the single source of truth. We'll build Astro components that parse this config to render the custom sections (Categorized Skills, GitHub Heatmap, YouTube playlist) and migrate existing content into the new structure. All work will be done in the `new design` folder first, then promoted to the root.

**Tech Stack:** Astro, TypeScript, HTML, CSS.

**Spec:** `docs/superpowers/specs/2026-09-10-portfolio-migration-design.md`

## Global Constraints

*   All development must happen within the `/home/kea/Desktop/portfolio/new design` directory.
*   Do not delete the original `index.html` or `assets` folder until the final promotion task.
*   The Astro project must build successfully (`npm run build`) before promotion.

---

### Task 1: Restructure Config Data (`config.ts`)

**Files:**
- Modify: `/home/kea/Desktop/portfolio/new design/src/config.ts`

**Interfaces:**
- Produces: `siteConfig` object with updated `skills` (object), `githubUsername` (string), `youtubePlaylistUrl` (string), and migrated content.

- [ ] **Step 1: Update `skills` to an object and add new fields**

```typescript
// Replace the existing skills array with:
  skills: {
    languages: ["Python", "SQL", "Java"],
    frameworks: ["Django", "FastAPI", "Spring Boot"],
    cloudAndInfrastructure: ["AWS / GCP", "Docker", "Kubernetes", "Git"]
  },
  githubUsername: "keammakola",
  youtubePlaylistUrl: "https://www.youtube.com/embed/videoseries?list=PLqVV_035I4xLcKWtlQAzhh_B9my8UnReI",
```

- [ ] **Step 2: Migrate text content**

Update `name`, `title`, `description`, `aboutMe`, `social` fields with data from the old `index.html`.

```typescript
  name: "Keabetswe Mmakola",
  title: "Software Engineer & Cloud/Data Enthusiast",
  description: "Portfolio of Keabetswe Mmakola, a Software Engineer & Cloud/Data Enthusiast based in Johannesburg.",
  social: {
    email: "keammakola@gmail.com",
    linkedin: "https://linkedin.com/in/keammakola",
    github: "https://github.com/keammakola",
  },
  aboutMe: "I’m a Johannesburg-based Software Engineer with a journey that bridges the gap between creative problem-solving and technical excellence...", // (Truncated here for brevity, but copy the full text from index.html in implementation)
```

- [ ] **Step 3: Update Experience and Education with placeholders/migrated data**

```typescript
  experience: [
    {
      company: "Your Company",
      title: "Software Engineer",
      dateRange: "2025 - Present",
      bullets: [
        "Add your experience bullet points here",
      ],
    }
  ],
  education: [
    {
      school: "WeThinkCode_",
      degree: "Software Engineering",
      dateRange: "2024 - 2025",
      achievements: [
        "Built numerous software products, mentored students, and strengthened skills in Python, Java, and web development."
      ],
    },
    {
      school: "Harvard Edx Online Course",
      degree: "CS50P: Python Programming",
      dateRange: "2025",
      achievements: [
        "Mastered Python fundamentals including algorithms, data structures, and problem-solving techniques."
      ],
    }
    // Add the rest from index.html
  ],
```

- [ ] **Step 4: Commit**

```bash
git add src/config.ts
git commit -m "feat: restructure config with migrated portfolio data"
```

### Task 2: Refactor `About.astro` for Categorized Skills

**Files:**
- Modify: `/home/kea/Desktop/portfolio/new design/src/components/About.astro`

**Interfaces:**
- Consumes: `siteConfig.skills` as an object instead of an array.

- [ ] **Step 1: Update the skills rendering logic**

```astro
---
import { siteConfig } from "../config";
---
<!-- Keep existing about text rendering -->
<!-- Replace the skills mapping section: -->

<div class="mt-8">
  <h3 class="text-xl font-bold mb-4">Tech Arsenal</h3>
  
  {Object.entries(siteConfig.skills).map(([category, skills]) => (
    <div class="mb-6">
      <h4 class="text-lg font-semibold capitalize mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
      <div class="flex flex-wrap gap-2">
        {skills.map((skill: string) => (
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: render categorized skills in About component"
```

### Task 3: Create `Github.astro` Component

**Files:**
- Create: `/home/kea/Desktop/portfolio/new design/src/components/Github.astro`

**Interfaces:**
- Consumes: `siteConfig.githubUsername`

- [ ] **Step 1: Create the component**

```astro
---
import { siteConfig } from "../config";
---

<section class="py-8">
  <h2 class="text-2xl font-bold mb-6">GitHub Activity</h2>
  <div class="w-full flex justify-center overflow-x-auto">
    <a href={`https://github.com/${siteConfig.githubUsername}`} target="_blank" rel="noopener noreferrer">
      <img 
        src={`https://ghchart.rshah.org/27c93f/${siteConfig.githubUsername}`} 
        alt={`${siteConfig.name}'s GitHub Contribution Chart`} 
        class="max-w-full"
      />
    </a>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Github.astro
git commit -m "feat: add Github heatmap component"
```

### Task 4: Create `Youtube.astro` Component

**Files:**
- Create: `/home/kea/Desktop/portfolio/new design/src/components/Youtube.astro`

**Interfaces:**
- Consumes: `siteConfig.youtubePlaylistUrl`

- [ ] **Step 1: Create the component**

```astro
---
import { siteConfig } from "../config";
---

<section class="py-8">
  <h2 class="text-2xl font-bold mb-6">Public Talks</h2>
  <div class="relative w-full pb-[56.25%] h-0">
    <iframe 
      src={siteConfig.youtubePlaylistUrl}
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Youtube.astro
git commit -m "feat: add Youtube playlist component"
```

### Task 5: Integrate Components into `index.astro`

**Files:**
- Modify: `/home/kea/Desktop/portfolio/new design/src/pages/index.astro`

**Interfaces:**
- Consumes: `Github.astro`, `Youtube.astro`

- [ ] **Step 1: Import and render new components**

```astro
---
import Header from "../components/Header.astro";
import Hero from "../components/Hero.astro";
import About from "../components/About.astro";
import Projects from "../components/Projects.astro";
import Experience from "../components/Experience.astro";
import Education from "../components/Education.astro";
import Github from "../components/Github.astro";
import Youtube from "../components/Youtube.astro";
import Footer from "../components/Footer.astro";
import { siteConfig } from "../config";
import "../styles/global.css";
---

<!-- ... header stuff ... -->
  <body>
    <Header />
    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <Youtube />
      <Github />
      <Experience />
      <Education />
    </main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 2: Verify Build**

```bash
npm install
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: integrate Github and Youtube components into layout"
```

### Task 6: Promote New Design

**Files:**
- Modify: `*` (moving files to root)

- [ ] **Step 1: Move new design files to root and clean up**

```bash
cd /home/kea/Desktop/portfolio
# Remove old site files (assuming git tracks history, we can safely delete)
rm index.html
rm -rf assets
# Move new design files up one level
mv "new design/"* .
mv "new design/".* . 2>/dev/null || true
# Remove empty folder
rmdir "new design"
```

- [ ] **Step 2: Final Commit**

```bash
git add -A
git commit -m "chore: promote Astro portfolio design to root"
```
