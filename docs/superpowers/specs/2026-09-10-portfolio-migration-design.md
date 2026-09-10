# Portfolio Migration Design Spec

## Overview
This document outlines the architectural plan for migrating the current single-file HTML portfolio to a modern, component-based Astro architecture. The migration will replace the existing site with the template provided in the `new design` folder while preserving all custom sections and data from the original site.

## 1. Data Architecture (`src/config.ts`)
The `src/config.ts` file will be expanded to serve as the single source of truth for the entire portfolio. 

### Structural Changes
*   **Skills Refactoring**: The current flat `skills` array will be converted into a categorized object to match the original "Tech Arsenal" structure:
    *   `languages`: Python, SQL, Java
    *   `frameworks`: Django, FastAPI, Spring Boot
    *   `cloudAndInfrastructure`: AWS / GCP, Docker, Kubernetes, Git
*   **New Integrations**: 
    *   `githubUsername`: "keammakola"
    *   `youtubePlaylistUrl`: URL to the "Public Talks" playlist.
*   **Experience Section**: The template's experience section will be retained and populated with placeholder data, allowing the user to add work history later.
*   **Existing Content**: All content from the `index.html` (About text, Projects, Education) will be migrated into their respective config fields.

## 2. Component Architecture

### Modified Components
*   **`About.astro`**: Will be refactored to parse the new categorized `skills` object and render them in a structured grid, maintaining the logical separation of the original "Tech Arsenal".

### New Components
*   **`Github.astro`**: A new component that fetches the user's GitHub contribution heatmap using the `ghchart.rshah.org` service. It will read the username dynamically from `config.ts`.
*   **`Youtube.astro`**: A new component dedicated to embedding the "Public Talks" YouTube playlist. It will feature a responsive video container to ensure mobile compatibility.

### Layout Integration
*   **`src/pages/index.astro`**: The new `Github` and `Youtube` components will be injected into the main page layout, ensuring a logical flow from Projects -> Public Talks -> GitHub Activity -> Experience -> Education.

## 3. Styling Strategy
*   Custom CSS will be scoped within the `Github.astro` and `Youtube.astro` components.
*   The heatmap will be centered, and the YouTube iframe will use a responsive wrapper (aspect-ratio box) to match the Astro template's modern, minimalist aesthetic.

## 4. Migration Execution Strategy
1.  **Isolated Development**: All modifications, component creation, and data entry will be performed exclusively within the `/home/kea/Desktop/portfolio/new design` directory.
2.  **Verification**: The Astro build process will be verified locally.
3.  **Promotion**: Once verified, the contents of `new design` will be moved to the root `/home/kea/Desktop/portfolio` directory, fully replacing the old `index.html` and `assets` directory. The `new design` folder will then be removed.
