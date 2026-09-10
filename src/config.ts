export const siteConfig = {
  name: "Keabetswe Mmakola",
  title: "Data Engineer | DevOps Architect | EdTech Founder",
  description:
    "Portfolio of Keabetswe Mmakola, a Data Engineer, DevOps Architect, and EdTech Founder based in Johannesburg.",
  accentColor: "#1d4ed8",
  social: {
    email: "keammakola@gmail.com",
    linkedin: "https://linkedin.com/in/keammakola",
    github: "https://github.com/keammakola",
  },
  aboutMe:
    "I’m a Solutions Architect and Data Engineer with a simple philosophy: I like my coffee strong, my cloud infrastructure highly available, and my data pipelines completely unbreakable. I specialise in designing scalable systems and building software that solves actual, high-impact problems—preferably without catching fire in production.\n\n<strong class=\"text-gray-900 block mb-2\">WHAT I DO & HOW I BUILD</strong>Trained at WeThinkCode_, I’ve spent my career diving deep into backend architecture. I thrive in the complexities of the backend—wrangling rogue datasets, obsessing over seamless CI/CD pipelines, and transforming raw data into robust, actionable products.\n\n<strong class=\"text-gray-900 block mt-4 mb-2\">BEYOND THE CODE</strong>I am deeply committed to the human side of technology and democratising education across South Africa. This mission drives Kleva Academy, a project that originally began as a YouTube channel where I simplified complex high school concepts for thousands of students. Today, I have scaled it into a next-generation, AI-powered edtech platform. As the founder and lead architect, I am leveraging modern web architecture and artificial intelligence to revolutionise how South African students master the CAPS curriculum.",
  skills: [
    { category: "Core Languages", items: ["Python", "SQL", "Java", "Bash"] },
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud Platform (GCP)"] },
    { category: "Architecture & System Design", items: ["Microservices", "Event-Driven Architecture", "REST", "GraphQL"] },
    { category: "Data Engineering & Orchestration", items: ["Apache Spark", "Apache Kafka", "dbt", "Apache Airflow"] },
    { category: "Databases & Storage", items: ["PostgreSQL", "Snowflake", "BigQuery", "AWS S3"] },
    { category: "DevOps & Infrastructure", items: ["Terraform", "Ansible", "Docker", "Kubernetes"] },
    { category: "CI/CD & Version Control", items: ["GitHub Actions", "GitLab CI", "Jenkins"] },
    { category: "Observability & Monitoring", items: ["Prometheus", "Grafana"] },
  ],
  githubUsername: "keammakola",
  youtubePlaylistUrl:
    "https://www.youtube.com/embed/videoseries?list=PLqVV_035I4xLcKWtlQAzhh_B9my8UnReI",
  projects: [
    {
      name: "Kleva Academy",
      description:
        "Kleva Academy is a gamified, next-generation edtech platform designed to modernise the South African CAPS curriculum. Architected on the bleeding edge with React, TanStack Start, and Supabase, it delivers a lightning-fast, gamified study environment. It features an integrated AI Tutor, real-time curriculum tracking, interactive mock exams, and robust mathematical typesetting, providing high school students with a deeply personalised learning experience.",
      link: "https://klevaacademy.co.za",
      skills: ["React", "AI", "Supabase", "TanStack"],
    },
    {
      name: "Get Hired",
      description:
        "An AI-powered job application assistant offering recruiter-level CV audits, compatibility scoring, and tailored cover letters.",
      link: "https://get-hired-one-ashen.vercel.app/",
      skills: ["Python", "AI", "FastAPI"],
    },

    {
      name: "SDLC For Dummies",
      description:
        "An intuitive roadmap designed to demystify the Software Development Life Cycle, translating complex engineering phases into simplified, actionable steps for students, aspiring developers and dev teams.",
      link: "https://github.com/keammakola/SDLC-For-Dummies",
      skills: ["DevOps", "Agile", "Software Engineering"],
    },
  ],
  experience: [
    {
      company: "Cashit (MAVUMA ENTERPRISE (PTY) LTD)",
      title: "Infrastructure Lead",
      dateRange: "August 2026 - Present",
      bullets: [
        "Responsible for the availability, capacity, resilience, configuration and lifecycle management of Cashit’s core infrastructure."
      ],
    },
    {
      company: "Cashit (MAVUMA ENTERPRISE (PTY) LTD)",
      title: "Intern Software Engineer",
      dateRange: "February 2026 - July 2026",
      bullets: [
        "Building, extending and testing go to market infrastructure readiness."
      ],
    },
  ],
  education: [
    {
      school: "WeThinkCode_",
      degree: "Advanced Diploma in Software Engineering",
      dateRange: "September 2024 - December 2025",
      achievements: [
        "Intensive peer-to-peer software engineering programme covering full-stack development, cloud computing, and DevOps.",
      ],
    },
    {
      school: "Microsoft",
      degree: "Azure Data & Administration Certifications",
      dateRange: "Certified",
      achievements: [
        "DP-700: Implementing Data Engineering Solutions using Microsoft Fabric",
        "DP-900: Microsoft Azure Data Fundamentals",
        "AZ-104: Microsoft Azure Administrator Associate",
      ],
    },
    {
      school: "Microsoft",
      degree: "Azure Architecture & DevOps Certifications",
      dateRange: "Certified",
      achievements: [
        "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
        "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
        "AZ-900: Microsoft Azure Fundamentals",
      ],
    },
  ],
};
