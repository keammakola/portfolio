import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "../src/config.ts";

test("siteConfig contains correct basic personal information", () => {
  assert.equal(siteConfig.name, "Keabetswe Mmakola");
  assert.equal(siteConfig.title, "Software Engineer & Cloud/Data Enthusiast");
  assert.equal(
    siteConfig.description,
    "Portfolio of Keabetswe Mmakola, a Software Engineer & Cloud/Data Enthusiast based in Johannesburg."
  );
});

test("siteConfig social links are properly configured", () => {
  assert.equal(siteConfig.social.email, "keammakola@gmail.com");
  assert.equal(siteConfig.social.linkedin, "https://linkedin.com/in/keammakola");
  assert.equal(siteConfig.social.github, "https://github.com/keammakola");
});

test("siteConfig aboutMe contains migrated content from index.html", () => {
  assert.ok(typeof siteConfig.aboutMe === "string");
  assert.ok(
    siteConfig.aboutMe.includes(
      "I’m a Johannesburg-based Software Engineer with a journey that bridges the gap between creative problem-solving and technical excellence."
    )
  );
  assert.ok(siteConfig.aboutMe.includes("WeThinkCode_"));
  assert.ok(siteConfig.aboutMe.includes("StudySquadSA"));
});

test("siteConfig skills is an object with categorized skill arrays", () => {
  assert.equal(typeof siteConfig.skills, "object");
  assert.ok(!Array.isArray(siteConfig.skills));
  assert.deepEqual(siteConfig.skills.languages, ["Python", "SQL", "Java"]);
  assert.deepEqual(siteConfig.skills.frameworks, [
    "Django",
    "FastAPI",
    "Spring Boot",
  ]);
  assert.deepEqual(siteConfig.skills.cloudAndInfrastructure, [
    "AWS / GCP",
    "Docker",
    "Kubernetes",
    "Git",
  ]);
});

test("siteConfig contains GitHub username and YouTube playlist URL", () => {
  assert.equal(siteConfig.githubUsername, "keammakola");
  assert.equal(
    siteConfig.youtubePlaylistUrl,
    "https://www.youtube.com/embed/videoseries?list=PLqVV_035I4xLcKWtlQAzhh_B9my8UnReI"
  );
});

test("siteConfig experience has placeholder data as required", () => {
  assert.ok(Array.isArray(siteConfig.experience));
  assert.equal(siteConfig.experience.length, 1);
  assert.equal(siteConfig.experience[0].company, "Your Company");
  assert.equal(siteConfig.experience[0].title, "Software Engineer");
  assert.equal(siteConfig.experience[0].dateRange, "2025 - Present");
  assert.deepEqual(siteConfig.experience[0].bullets, [
    "Add your experience bullet points here",
  ]);
});

test("siteConfig education contains all 4 entries migrated from index.html", () => {
  assert.ok(Array.isArray(siteConfig.education));
  assert.equal(siteConfig.education.length, 4);

  assert.deepEqual(siteConfig.education[0], {
    school: "WeThinkCode_",
    degree: "Software Engineering",
    dateRange: "2024 - 2025",
    achievements: [
      "Built numerous software products, mentored students, and strengthened skills in Python, Java, and web development.",
    ],
  });

  assert.deepEqual(siteConfig.education[1], {
    school: "Harvard Edx Online Course",
    degree: "CS50P: Python Programming",
    dateRange: "2025",
    achievements: [
      "Mastered Python fundamentals including algorithms, data structures, and problem-solving techniques.",
    ],
  });

  assert.deepEqual(siteConfig.education[2], {
    school: "Harvard Edx Online Course",
    degree: "CS50SQL: Introduction to Databases",
    dateRange: "2025",
    achievements: [
      "Fundamentals of SQL and database management, designing schemas, and handling data efficiently.",
    ],
  });

  assert.deepEqual(siteConfig.education[3], {
    school: "WeThinkCode_",
    degree: "GenAI Course for Software Engineers",
    dateRange: "2025",
    achievements: [
      "Basics of AI, machine learning concepts, neural networks, and practical AI applications.",
    ],
  });
});

test("siteConfig projects contains migrated projects from index.html", () => {
  assert.ok(Array.isArray(siteConfig.projects));
  assert.equal(siteConfig.projects.length, 3);
  assert.equal(siteConfig.projects[0].name, "Get Hired");
  assert.equal(
    siteConfig.projects[0].link,
    "https://get-hired-one-ashen.vercel.app/"
  );
  assert.equal(siteConfig.projects[1].name, "Zest");
  assert.equal(siteConfig.projects[1].link, "https://zest-inky.vercel.app/");
  assert.equal(siteConfig.projects[2].name, "SDLC For Dummies");
  assert.equal(
    siteConfig.projects[2].link,
    "https://github.com/keammakola/SDLC-For-Dummies"
  );
});
