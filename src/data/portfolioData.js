export const personalInfo = {
  name: "Harshad Shashikant Ayatode",
  role: "Python Developer",
  tagline: "I help teams turn ideas into intelligent, working software.",
  cyclingRoles: [
    "a Python Developer",
    "a Backend Engineer",
    "an ML & NLP Enthusiast",
    "a Full-Stack Builder"
  ],
  tagPills: [
    "Python Developer Intern (Codec Technologies)",
    "ML & Backend Enthusiast",
    "Available for Hire"
  ],
  email: "harshadaitode2@gmail.com",
  phone: "+91 9665696496",
  location: "Maharashtra, India",
  photo: "/harshad.jpg",
  resumeUrl: "/Harshad_Ayatode_Resume.pdf",
  github: "https://github.com/Harshad964",
  linkedin: "https://linkedin.com/in/harshad-ayatode",
  bio: "Final-year B.Tech CSE student (graduating 2027) and Python Developer with hands-on experience in Python, Flask, REST APIs, SQL, and MongoDB, plus frontend development using React.js, JavaScript, HTML, and CSS. Completed two Python Developer internships and built four end-to-end full-stack projects spanning REST API design, database modeling, ML integration, and responsive UI. Strong foundation in DSA, OOP, and debugging. Seeking a Python Developer Internship / Junior Python Developer role."
};

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Karmaveer Bhaurao Patil College of Engineering",
    period: "2022 – 2027",
    score: "CGPA: 8.2",
    details: "Focus on Algorithms, Database Systems, Software Engineering & Machine Learning",
    coursework: ["Python", "Flask", "SQL", "HTML & CSS", "JavaScript", "Git & GitHub", "Data Analytics", "OOP & DSA"]
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur",
    period: "2021 – 2022",
    score: "55.5%",
    details: "Science Stream with Mathematics, Physics, and Chemistry foundation."
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    institution: "Sadhana Vidyalaya, Tavashi",
    period: "2019 – 2020",
    score: "82.4%",
    details: "High Academic Distinction with strong fundamentals in Mathematics and Sciences."
  }
];

export const achievements = [
  {
    title: "NPTEL Certified",
    detail: "Fundamentals of Computer Systems",
    icon: "Award",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Udemy Certified",
    detail: "Python for Data Science & Machine Learning",
    icon: "BookOpen",
    color: "from-blue-400 to-indigo-500"
  },
  {
    title: "Udemy Certified",
    detail: "Java Programming Masterclass",
    icon: "Code2",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Udemy Certified",
    detail: "ML & Deep Learning Specialization",
    icon: "Cpu",
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Internship Certificate",
    detail: "Python Developer at Codec Technologies",
    icon: "CheckCircle2",
    color: "from-cyan-400 to-blue-600"
  },
  {
    title: "Internship Certificate",
    detail: "Python Developer at CodeAlpha",
    icon: "CheckCircle2",
    color: "from-violet-400 to-purple-600"
  },
  {
    title: "RTSE Gold Medalist",
    detail: "Gold Medal (Class 8) - State Scholarship Exam",
    icon: "Trophy",
    color: "from-yellow-400 to-amber-600"
  },
  {
    title: "RTSE Silver Medalist",
    detail: "Silver Medal (Class 6) - State Scholarship Exam",
    icon: "Medal",
    color: "from-slate-300 to-zinc-400"
  }
];

export const experiences = [
  {
    role: "Python Developer Intern",
    company: "Codec Technologies",
    period: "Jun 2026",
    location: "Remote / Hybrid",
    type: "Internship",
    highlights: [
      "Built Python applications and automation scripts end-to-end, strengthening backend development and debugging skills.",
      "Participated in rigorous code reviews and applied best practices for clean, maintainable, and modular Python code.",
      "Integrated RESTful API endpoints and optimized data handling workflows for production-level throughput."
    ],
    tech: ["Python", "Flask", "REST APIs", "Automation", "Debugging", "Git"]
  },
  {
    role: "Python Developer Intern",
    company: "CodeAlpha",
    period: "Jun 2026",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Developed Python-based applications with clean, reusable, well-documented code following industry standards.",
      "Used Git and GitHub for version control, collaborative development, branches, and issue tracking.",
      "Designed algorithmic logic and data persistence layers handling structured JSON datasets."
    ],
    tech: ["Python", "Algorithms", "Git", "GitHub", "OOP", "JSON"]
  }
];

export const projects = [
  {
    id: "sentiment-analyzer",
    title: "AI-Based Sentiment Analyzer",
    subtitle: "Real-time Text Classification Web App",
    description: "Built a full-stack Flask web application with REST API endpoints for real-time text classification, integrating state-of-the-art Hugging Face Transformer models to classify user reviews as Positive, Negative, or Neutral with granular confidence scores.",
    bullets: [
      "Engineered Flask REST API endpoints capable of low-latency inference on incoming text streams.",
      "Integrated Hugging Face Transformers pipeline for NLP sentiment classification with probability breakdowns.",
      "Designed MongoDB data models for storing analyzed queries, user feedback, and metadata.",
      "Built responsive JSON-driven UI with instant visual feedback and score indicators."
    ],
    tech: ["Python", "Flask", "Hugging Face", "REST API", "MongoDB", "Transformers"],
    category: "AI & Backend",
    gradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
    stats: "98% Model Accuracy",
    github: "https://github.com/Harshad964",
    demo: "#"
  },
  {
    id: "ai-chatbot",
    title: "Intelligent Conversational AI Chatbot",
    subtitle: "Contextual NLP Engine with Dynamic Responses",
    description: "Built an end-to-end conversational AI chatbot featuring a Python/NLP backend and JSON APIs. Designed an interactive frontend for real-time two-way conversations with pattern matching and intent classification.",
    bullets: [
      "Implemented NLP tokenization, lemmatization, and intent classification pipelines in Python.",
      "Developed structured JSON API responses for rapid bidirectional client-server communication.",
      "Crafted an interactive chat interface supporting conversation persistence and instant replies.",
      "Engineered fallback intent handling and contextual memory for continuous dialog flow."
    ],
    tech: ["Python", "NLP", "Flask", "JSON APIs", "JavaScript", "CSS3"],
    category: "AI & Backend",
    gradient: "from-purple-600/30 via-pink-600/20 to-rose-600/30",
    stats: "<80ms Response Time",
    github: "https://github.com/Harshad964/simple-chatbot",
    demo: "https://simple-chatbot-five.vercel.app"
  },
  {
    id: "shopsphere",
    title: "ShopSphere - E-Commerce Platform",
    subtitle: "Full-Stack Web Architecture & Product Catalog",
    description: "Built a modern Python-powered e-commerce web application featuring dynamic product cataloging, responsive cart state management, and streamlined checkout workflows.",
    bullets: [
      "Engineered backend routes in Python for catalog querying and inventory handling.",
      "Developed high-conversion responsive frontend with interactive product showcases.",
      "Deployed production build live on Vercel with instant edge caching."
    ],
    tech: ["Python", "JavaScript", "HTML5", "CSS3", "REST APIs", "Vercel"],
    category: "AI & Backend",
    gradient: "from-amber-600/30 via-orange-600/20 to-red-600/30",
    stats: "Live Production App",
    github: "https://github.com/Harshad964/ShopSphere",
    demo: "https://shopsphere-rho-eight.vercel.app"
  },
  {
    id: "delay-prediction",
    title: "Construction Project Delay Prediction System",
    subtitle: "Predictive Analytics & Risk Assessment Pipeline",
    description: "Built an end-to-end Machine Learning web application using Decision Trees, Random Forest, and Logistic Regression algorithms to forecast project delay risks with a SQL-backed data pipeline and prediction dashboard.",
    bullets: [
      "Trained and benchmarked Decision Tree, Random Forest, and Logistic Regression models using scikit-learn.",
      "Engineered a SQL-backed structured data pipeline extracting multi-variable project metrics.",
      "Designed an interactive risk estimation dashboard displaying feature importances and probability curves.",
      "Allowed project managers to input parameter scenarios and inspect predicted completion variance."
    ],
    tech: ["Python", "Machine Learning", "scikit-learn", "SQL", "Pandas", "Flask"],
    category: "Machine Learning",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
    stats: "3 ML Models Compared",
    github: "https://github.com/Harshad964",
    demo: "#"
  },
  {
    id: "portfolio-website",
    title: "Modern Developer Portfolio",
    subtitle: "High-Performance Interactive Showcase",
    description: "Designed and engineered a fully responsive, component-based developer portfolio site showcasing full-stack projects, skills, education, and credentials with sleek dark glassmorphism and micro-interactions.",
    bullets: [
      "Constructed reusable React component architecture with Tailwind CSS and Framer Motion transitions.",
      "Engineered interactive canvas particle constellation and dynamic role typing engines.",
      "Implemented responsive mobile drawers, smooth anchor scrolls, and interactive contact form.",
      "Optimized performance with zero layout shift and Lighthouse-grade accessibility scores."
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "HTML5"],
    category: "Frontend & Full-Stack",
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-600/30",
    stats: "100% Responsive",
    github: "https://github.com/Harshad964/my-portfolio",
    demo: "https://my-portfolio-harshad964.vercel.app"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code",
    description: "Core languages used for backend architectures, scripting, and algorithmic solutions",
    skills: [
      { name: "Python", level: 92, highlight: true },
      { name: "JavaScript", level: 85, highlight: false },
      { name: "SQL", level: 88, highlight: true }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    description: "Web server frameworks, REST API construction, and server-side business logic",
    skills: [
      { name: "Flask", level: 90, highlight: true },
      { name: "Django (MVC basics)", level: 75, highlight: false },
      { name: "REST API Design", level: 90, highlight: true },
      { name: "OOP Principles", level: 88, highlight: false }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Crafting fluid, intuitive, and responsive client-side web interfaces",
    skills: [
      { name: "React.js", level: 84, highlight: true },
      { name: "HTML5 & Semantic Web", level: 92, highlight: false },
      { name: "CSS3 & Modern Layouts", level: 88, highlight: false },
      { name: "Responsive Web Design", level: 90, highlight: true }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document storage architectures and query optimization",
    skills: [
      { name: "MySQL", level: 85, highlight: true },
      { name: "MongoDB (NoSQL)", level: 82, highlight: true },
      { name: "Relational Modeling", level: 85, highlight: false }
    ]
  },
  {
    title: "Core Computer Science",
    icon: "Cpu",
    description: "Foundational computer science principles, algorithms, and AI fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, highlight: true },
      { name: "Problem Solving", level: 88, highlight: true },
      { name: "JSON & Serialization", level: 95, highlight: false },
      { name: "REST Architecture", level: 90, highlight: false },
      { name: "ML Basics (scikit-learn)", level: 80, highlight: true }
    ]
  },
  {
    title: "Developer Tools & Testing",
    icon: "Wrench",
    description: "Version control, development environments, and API diagnostics",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "VS Code", level: 95, highlight: false },
      { name: "Postman", level: 88, highlight: true },
      { name: "API Testing & Debugging", level: 85, highlight: false }
    ]
  }
];

export const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];
