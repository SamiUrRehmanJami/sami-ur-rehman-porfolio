// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: "Sami Ur Rehman",
  title: "Senior Full Stack Engineer",
  subtitle: "MERN/MEAN · React · Next.js · Node.js · AI/LLM Systems",
  tagline: "Building production-grade web apps & AI products for US and global clients",
  availability: "Available for Remote Projects",
  email: "samiakbar680@9999gmail.com",
  phone: "+92 (306) 612202133",
  phoneTel: "+923066122021",
  location: "Lahore, Pakistan 🇵🇰",
  locationSub: "Available for dfremote work worldwide · US timezone friendly",
  cvUrl: "/Sami-Ur-Rehman.pdf",
  calendlyUrl: "https://calendly.com/samiakbar680",
  closingQuote:
    "Open to full-time remote roles, freelance contracts, and long-term collaborations. Let's build something great.",
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const socials = {
  github: "https://github.com/sami-ur-rehman",
  linkedin: "https://www.linkedin.com/in/samiurrehmanjami/",
  email: `mailto:${personal.email}`,
};

// ─── ABOUT STATS ──────────────────────────────────────────────────────────────
export const stats = [
  { value: "6+", label: "Years Exp" },
  { value: "8+", label: "Products Shipped" },
  { value: "5", label: "Live Platforms" },
];

// ─── WHY HIRE ME ──────────────────────────────────────────────────────────────
export const whyHireMe = [
  {
    icon: "🌐",
    title: "US Timezone Friendly",
    description:
      "5+ years collaborating with US-based teams, consistently delivering on schedule across time zones. Async-first with daily updates.",
  },
  {
    icon: "🚀",
    title: "End-to-End Ownership",
    description:
      "I take projects from whiteboard to production — UI, APIs, database, deployment — with zero handoff gaps. No micromanagement needed.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    description:
      "Fluent English, proactive Slack/email updates, detailed documentation. You'll always know exactly where the project stands.",
  },
  {
    icon: "✅",
    title: "Production-Proven",
    description:
      "Every major project I've built is live and serving real users at scale — not just demos. I build for reliability, performance, and growth.",
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "💻",
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end web apps using React, Next.js, Angular on the frontend and Node.js, Express, MongoDB, PostgreSQL on the backend. From MVPs to enterprise platforms.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: "🤖",
    title: "AI Integration & LLM Products",
    description:
      "Integrate OpenAI API, build RAG pipelines, and ship AI-powered features into your SaaS. I turn AI from a demo into a working, production product.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: "⚙️",
    title: "API Design & Backend Architecture",
    description:
      "Scalable REST API design, database architecture, Redis caching, Elasticsearch, and cloud deployment on AWS. Built for performance and scale.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Audit and optimize existing applications — faster load times, better database queries, caching strategies, and CI/CD pipelines for smooth deployments.",
    gradient: "from-amber-500 to-orange-500",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express.js", level: 90 },
      { name: "OpenAI API", level: 87 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Redis", level: 88 },
      { name: "Elasticsearch", level: 85 },
      { name: "Prompt Engineering", level: 83 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 82 },
      { name: "Jest/Testing", level: 85 },
      { name: "Agile/Scrum", level: 88 },
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "SeeBiz — B2B Wholesale Marketplace",
    description:
      "A US-based B2B wholesale marketplace connecting suppliers and buyers at scale. Built with Angular, Node.js, and MongoDB, featuring Redis caching for performance and Elasticsearch for sub-second product search. Serves businesses across the US as a high-performance platform.",
    tech: ["Angular", "Node.js", "MongoDB", "TypeScript", "RxJS", "AWS", "Redis", "ElasticSearch"],
    badge: "🌐 Live — Serving US Businesses",
    gradient: "from-violet-500 to-purple-500",
    demoUrl: "https://seebiz.com/",
  },
  {
    title: "Krub.ai",
    description:
      "An AI-driven SaaS platform where I built full-stack features using Next.js, Node.js, and TypeScript. Integrated the OpenAI API to power LLM-driven community features — handling prompt design, API integration, and the full frontend experience.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "OpenAI API", "AWS"],
    badge: "🤖 AI-Powered · LLM Integration",
    gradient: "from-purple-500 to-pink-500",
    demoUrl: "https://krub.ai",
  },
  {
    title: "SeeWork — AI SaaS Platform",
    description:
      "An intelligent SaaS product built with React, Node.js, and PostgreSQL, featuring RAG (Retrieval-Augmented Generation) pipelines and LLM integrations for context-aware AI features. Engineered end-to-end from UI to database design and deployment.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "RAG Pipeline", "OpenAI API"],
    badge: "🤖 RAG · LLM · Production",
    gradient: "from-cyan-500 to-teal-500",
    demoUrl: "https://seework.seebiz.com",
  },
  {
    title: "Cyberfora — Cybersecurity Conference Platform",
    description:
      "A large-scale cybersecurity conference platform built for a US-based client. Features speaker management, session scheduling, and attendee registration. Delivered fully remote as part of a US development agency.",
    tech: ["Next.js", "React", "Node.js", "TypeScript", "REST API"],
    badge: "🇺🇸 US Client · Remote",
    gradient: "from-slate-500 to-zinc-500",
    demoUrl: "https://www.cyberfora.com/",
  },
  {
    title: "LunchApp — Office Lunch Ordering",
    description:
      "A workplace lunch ordering platform built to streamline group meal purchases for office environments. Enables teams to coordinate daily lunch orders with a clean, fast interface backed by Angular and Node.js.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    badge: "🍱 Live Product",
    gradient: "from-amber-500 to-orange-500",
    demoUrl: "https://myofficelunch.xyz",
  },
  {
    title: "SplitEase — Expense Splitting",
    description:
      "An expense-splitting tool built into the LunchApp ecosystem that makes shared cost management effortless for office groups. Allows teams to track, divide, and settle shared expenses with a simple, intuitive flow.",
    tech: ["Angular", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    badge: "💸 Live Feature",
    gradient: "from-green-500 to-teal-500",
    demoUrl: "https://myofficelunch.xyz/splitwise",
  },
  {
    title: "Refino.se",
    description:
      "A property listing website for Swedish real estate with filtering, bookmarking, and agent contact features. Built with modern tech stack for optimal performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "AWS"],
    badge: "",
    gradient: "from-blue-500 to-indigo-500",
    demoUrl: "https://refino.se",
  },
  {
    title: "Books Management System",
    description:
      "A book inventory system built for bookstores and institutions. Includes stock tracking, order logs, and user authentication with responsive interface.",
    tech: ["React", "TypeScript", "Firebase", "AWS EC2"],
    badge: "",
    gradient: "from-orange-500 to-red-500",
    demoUrl: "https://books.seebiz.com/",
  },
  {
    title: "POS System",
    description:
      "Modern Point of Sale system built with Angular and MongoDB, featuring inventory management, sales tracking, and real-time reporting capabilities.",
    tech: ["Angular", "MongoDB", "Node.js", "Express", "Material UI"],
    badge: "",
    gradient: "from-teal-500 to-cyan-500",
    demoUrl: "",
  },
];

// ─── CLIENTS STRIP ────────────────────────────────────────────────────────────
export const platforms = [
  "SeeBiz.com",
  "Krub.ai",
  "SeeWork",
  "Cyberfora",
  "Refino.se",
  "Beltravel.lv",
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: "Full Stack Engineer",
    company: "SeeBiz PVT LTD",
    period: "Jan 2022 – Present · 4 yrs 6 mos",
    location: "Lahore, Pakistan",
    description:
      "Architected and shipped 3 simultaneous production SaaS platforms as the lead full-stack engineer, owning features end to end from frontend to deployment. Built and scaled SeeBiz.com — a US-based B2B wholesale marketplace — with Angular, Node.js, MongoDB, Redis, and Elasticsearch. Developed Krub.ai with Next.js, Node.js, TypeScript, and OpenAI API for LLM-powered community features. Engineered SeeWork with React, Node.js, PostgreSQL, and RAG pipelines for context-aware AI.",
    achievements: [
      "Architected and shipped 3 production SaaS platforms simultaneously",
      "Implemented Redis caching & Elasticsearch for sub-second search performance",
      "Integrated OpenAI API and RAG pipelines into production AI products",
      "Designed and maintained 300+ REST APIs across all platforms",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance / Self-Employed",
    period: "Jun 2020 – Nov 2021 · 1 yr 6 mos",
    location: "United States · Remote",
    description:
      "Delivered full-stack web applications for US-based clients as a subcontract developer for a remote agency. Built Cyberfora — a large-scale cybersecurity conference platform — featuring speaker management, session scheduling, and attendee registration using Next.js, React, and Node.js. Operated fully remote across US time zones, consistently delivering on schedule.",
    achievements: [
      "Built Cyberfora, a large-scale conference platform for US client",
      "Managed projects end-to-end: UI, backend APIs, and deployment",
      "5+ years total remote collaboration with US-based teams",
    ],
  },
  {
    role: "Web Development Instructor",
    company: "Qalam Training Programs",
    period: "Jan 2023 – Present",
    location: "Lahore, Pakistan",
    type: "Part-time · On-site",
    description:
      "Conducted hands-on web development training sessions for aspiring IT professionals. Taught core frontend and backend concepts including HTML, CSS, JavaScript, React, and Node.js. Mentored students through real-world project building, code reviews, and career guidance in the tech industry.",
    achievements: [
      "Trained 1500+ students in full-stack web development",
      "Designed structured curriculum covering MERN stack fundamentals",
      "Guided students to build and deploy portfolio projects",
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Sami delivered a high-quality full-stack application on time and communicated clearly throughout. He took full ownership of the project and required minimal direction. Highly recommend for any serious web project.",
    name: "Faiq",
    // role: "[Role, Company — US]",
    initials: "FA",
  },
  {
    quote:
      "Working with Sami was seamless despite the timezone difference. He was proactive, wrote clean code, and always delivered what was scoped. We'll definitely work together again.",
    name: "James Carter",
    // role: "[Role, Company — US]",
    initials: "JC",
  },
];
