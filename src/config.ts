export const siteConfig = {
  name: "Keabetswe Mmakola",
  title: "Data Engineer | DevOps Expert | Solutions Architect | EdTech Founder",
  description:
    "Portfolio of Keabetswe Mmakola, a Data Engineer, DevOps Expert, Solutions Architect, and EdTech Founder based in Johannesburg.",
  accentColor: "#1d4ed8",
  social: {
    email: "keammakola@gmail.com",
    linkedin: "https://linkedin.com/in/keammakola",
    github: "https://github.com/keammakola",
  },
  aboutMe: `I'm a software engineer focused on data engineering, DevOps, and systems architecture. I build scalable backend systems, reliable cloud infrastructure, and resilient data pipelines designed to perform predictably in production.

Trained at WeThinkCode_, I enjoy solving complex backend problems, automating delivery through CI/CD, and designing systems that remain maintainable as they grow.

I'm also the founder of Kleva Academy, an education platform that uses AI to help South African students master the CAPS curriculum. Having impacted over 25,000 students so far, it's where I put my engineering experience to work making learning more accessible and personal.`,
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
    "https://www.youtube-nocookie.com/embed/videoseries?list=PLqVV_035I4xLcKWtlQAzhh_B9my8UnReI",
  projects: [
    {
      name: "Kleva Academy",
      description:
        "Kleva Academy has impacted over 25,000 students so far. It is a gamified, next-generation edtech platform designed to modernise the South African CAPS curriculum. Architected on the bleeding edge with React, TanStack Start, and Supabase, it delivers a lightning-fast, gamified study environment. It features an integrated AI Tutor, real-time curriculum tracking, interactive mock exams, and robust mathematical typesetting, providing high school students with a deeply personalised learning experience.",
      link: "https://klevaacademy.co.za",
      status: "Live",
      skills: ["React + TypeScript", "TanStack Start + Query", "Vite + Tailwind CSS", "Supabase + PostgreSQL", "Groq + OpenAI", "Node.js + Docker", "Testing + CI"],
      techChoices: [
        {
          technologies: ["React + TypeScript"],
          role: "React and TypeScript power the study dashboard, quizzes, profiles, and AI tutor interface. React Markdown and KaTeX render study notes and equations; Framer Motion and Lucide React provide animations and icons.",
          reason: "Reusable components keep the interface consistent, and types catch data mismatches. Formatted explanations, readable equations, and visual feedback help students navigate and learn.",
        },
        {
          technologies: ["TanStack Start + Query"],
          role: "TanStack Start and Router handle the full-stack framework, routing, and server rendering. TanStack Query manages asynchronous fetching, caching, and server state.",
          reason: "Connects the React interface with server logic and typed navigation, keeps application data synchronised, and reduces repeated requests.",
        },
        {
          technologies: ["Vite + Tailwind CSS"],
          role: "Development server, production builds, and responsive styling.",
          reason: "Supports quick iteration and a consistent visual system across screen sizes.",
        },
        {
          technologies: ["Supabase + PostgreSQL"],
          role: "Authentication, database records, file storage, and access policies. Supabase Edge Functions and Deno handle AI requests, progress updates, and membership synchronisation.",
          reason: "Provides a shared backend for student accounts, learning progress, and resources. Protected operations run on the server, keeping service credentials private.",
        },
        {
          technologies: ["Groq + OpenAI"],
          role: "AI tutoring, answer marking, and personalised study insights. pgvector and OpenAI embeddings retrieve relevant curriculum material by meaning.",
          reason: "Grounds explanations in curriculum context, assesses student responses, and turns learning activity into personalised guidance.",
        },
        {
          technologies: ["Node.js + Docker"],
          role: "Node.js provides the production runtime, Nitro produces the server build output, and Docker packages the application into containers.",
          reason: "Packages the application into a repeatable deployment environment.",
        },
        {
          technologies: ["Testing + CI"],
          role: "Vitest, Testing Library, and Playwright test components, behaviour, and browser journeys. ESLint, Prettier, and GitHub Actions handle code checks, formatting, and continuous integration.",
          reason: "Checks application logic and important user journeys, keeps code consistent, and automates verification when changes are made.",
        },
      ],
    },
    {
      name: "The Football Experiment",
      description:
        "I built a prediction bot just to prove your betslip will lose. A repeatable Python pipeline prepares match data, trains models, and backtests predictions, comparing a logistic baseline with XGBoost and a Dixon–Coles goals model. An interactive React evidence page presents the results, making the models and their performance easier to explore.",
      link: "https://betting.keabetswe.online",
      sourceLink: "https://github.com/keammakola/Football-Predictor",
      status: "Open Source",
      statuses: ["Open Source", "Live"],
      skills: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "XGBoost", "React", "TypeScript", "Vite", "Tailwind CSS"],
      techChoices: [
        {
          technologies: ["Python"],
          role: "Data preparation, model training, backtests, and export scripts.",
          reason: "One language connects the numerical work and the repeatable pipeline.",
        },
        {
          technologies: ["pandas", "NumPy"],
          role: "Match tables, feature calculations, and probability arrays.",
          reason: "They make chronological transformations and numerical calculations practical.",
        },
        {
          technologies: ["SciPy"],
          role: "Poisson probabilities and optimisation for Dixon–Coles.",
          reason: "The goals model needs a probability distribution and a constrained parameter fit.",
        },
        {
          technologies: ["scikit-learn", "XGBoost"],
          role: "The logistic baseline, class encoding, evaluation metrics, and boosted trees.",
          reason: "A simple baseline gives the more flexible model something concrete to improve on.",
        },
        {
          technologies: ["React", "TypeScript"],
          role: "The interactive evidence page and typed data components.",
          reason: "Reusable components keep the charts consistent; types help catch mismatches in the data they consume.",
        },
        {
          technologies: ["Vite", "Tailwind CSS"],
          role: "Frontend builds and the visual system.",
          reason: "They support quick iteration and a consistent layout across screen sizes.",
        },
      ],
    },
    {
      name: "Get Hired",
      description:
        "A career toolkit for building a CV, reviewing it against a job description, and drafting an editable cover letter. Built with Python and Flask, it uses Groq for AI-assisted reviews and generates downloadable PDFs, helping job seekers prepare tailored applications.",
      link: "https://gethired.keabetswe.online",
      status: "Live",
      skills: ["Python", "Flask", "Groq", "PDF Generation", "Vercel"],
    },
  ],
  experience: [
    {
      company: "Cashit (MAVUMA ENTERPRISE (PTY) LTD)",
      title: "Intern Software Engineer",
      dateRange: "February 2026 - July 2026",
      bullets: [
        "Building, extending and testing go to market infrastructure readiness."
      ],
    },
    {
      company: "Cashit (MAVUMA ENTERPRISE (PTY) LTD)",
      title: "Infrastructure Lead",
      dateRange: "August 2026 - Present",
      bullets: [
        "Responsible for the availability, capacity, resilience, configuration and lifecycle management of Cashit’s core infrastructure."
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
        "DP-700: Fabric Data Engineer Associate",
        "DP-900: Microsoft Azure Data Fundamentals",
        "AZ-104: Microsoft Azure Administrator Associate",
      ],
    },
    {
      school: "Microsoft",
      degree: "Azure Architecture & DevOps Certifications",
      dateRange: "Certified",
      achievements: [
        "AZ-305: Azure Solutions Architect Expert",
        "AZ-400: DevOps Engineer Expert",
        "AZ-900: Microsoft Azure Fundamentals",
      ],
    },
  ],
};
