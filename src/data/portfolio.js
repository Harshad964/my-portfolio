/**
 * Central Portfolio Data File
 * Harshad Shashikant Ayatode - Portfolio Source of Truth
 * 
 * All personal details, projects, skills, experience, education,
 * and certifications are defined here for easy updates.
 */

export const personalInfo = {
  name: "Harshad Shashikant Ayatode",
  initials: "HA",
  primaryTitle: "Computer Science & Engineering Student",
  secondaryTitle: "Aspiring Software Developer",
  tertiaryTitle: "Python Developer",
  tagline: "I build practical software solutions and enjoy solving problems using technology.",
  email: "harshadayatode2@gmail.com",
  phone: "+91 9665696496",
  location: "Maharashtra, India",
  graduationYear: "2027",
  status: "Open to Internships & Software Engineering Roles",
  socials: {
    github: "https://github.com/Harshad964",
    linkedin: "https://linkedin.com/in/harshad-ayatode",
    email: "mailto:harshadayatode2@gmail.com",
  },
  resume: {
    path: "/resume/Final Resume.pdf",
    fileName: "Harshad_Shashikant_Ayatode_Resume.pdf",
    heading: "Resume",
    description: "Interested in my profile? View or download my latest resume.",
  },
};

export const aboutData = {
  summary: [
    "I am a Computer Science & Engineering undergraduate (Class of 2027) with a deep passion for building robust software applications and practical backend solutions.",
    "My core development focus centers on Python development, REST API design with Flask, relational and NoSQL databases, and clean Object-Oriented Programming. I continuously sharpen my skills in Data Structures & Algorithms (DSA), problem solving, and Machine Learning fundamentals.",
    "Through hands-on internships and project development, I emphasize writing clean, maintainable code, following industry version control practices with Git and GitHub, and rapidly learning new technologies to solve real-world problems."
  ],
  highlights: [
    { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
    { label: "Graduation", value: "2027" },
    { label: "Core Focus", value: "Python, Backend & REST APIs" },
    { label: "Academic CGPA", value: "8.2 / 10.0" },
  ],
  keyAttributes: [
    "Problem Solving & DSA",
    "RESTful API Development",
    "Clean & Maintainable Code",
    "Database Architecture",
    "Machine Learning Basics",
    "Collaborative Git Workflow",
  ]
};

export const skillCategories = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages for logic, scripts, and algorithms",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend / Frameworks",
    icon: "Server",
    description: "Server architecture, API endpoints, and business logic",
    skills: ["Flask", "Django (MVC basics)", "REST API Design", "OOP"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    description: "Responsive user interfaces and client-side design",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
  },
  {
    category: "Database",
    icon: "Database",
    description: "Structured storage, schemas, and queries",
    skills: ["MySQL", "MongoDB (NoSQL)", "Relational Database Modeling"],
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    description: "Foundational computer science principles",
    skills: ["DSA", "Problem Solving", "JSON", "REST APIs", "ML Basics"],
  },
  {
    category: "Tools & Testing",
    icon: "Wrench",
    description: "Development workflow and testing utilities",
    skills: ["Git", "GitHub", "VS Code", "Postman", "API Testing"],
  },
];

export const projects = [
  {
    id: "sentiment-analyzer",
    title: "AI-Based Sentiment Analyzer",
    subtitle: "Full-Stack NLP Application",
    description:
      "Built a full-stack Flask web application with REST API endpoints for real-time text classification, integrating Hugging Face models to classify reviews as Positive/Negative/Neutral with confidence scores. Designed MongoDB data models and a JSON-driven frontend for real-time sentiment results.",
    technologies: [
      "Python",
      "Flask",
      "REST API",
      "Hugging Face Transformers",
      "MongoDB",
    ],
    githubUrl: null, // Only verified links; null indicates link unavailable
    liveUrl: null,
    status: "Completed",
    category: "AI / NLP & Web Development",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    subtitle: "Conversational NLP System",
    description:
      "Built an end-to-end conversational AI chatbot with a Python/NLP backend and JSON APIs, designed for real-time two-way conversations with intent matching.",
    technologies: ["Python", "NLP", "JSON APIs", "Flask"],
    githubUrl: null,
    liveUrl: null,
    status: "Completed",
    category: "Conversational AI",
  },
  {
    id: "construction-delay-prediction",
    title: "Construction Project Delay Prediction System",
    subtitle: "Machine Learning Risk Assessment",
    description:
      "Built an ML app using Decision Tree, Random Forest and Logistic Regression to forecast project delay risk, with an SQL-backed data pipeline and prediction display interface.",
    technologies: ["Python", "ML", "SQL", "scikit-learn"],
    githubUrl: null,
    liveUrl: null,
    status: "Completed",
    category: "Machine Learning",
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    subtitle: "Component-Driven Web Application",
    description:
      "Designed a fully responsive, component-based portfolio site showcasing projects, skills and certifications with a modern developer aesthetic, smooth navigation, and accessible design.",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Harshad964",
    liveUrl: "#home",
    status: "Live",
    category: "Web Development",
  },
];

export const experiences = [
  {
    company: "Codec Technologies",
    role: "Python Developer Intern",
    period: "June 2026",
    type: "Internship",
    location: "Remote / On-site",
    responsibilities: [
      "Built Python applications and automation scripts end-to-end, strengthening backend development and debugging skills.",
      "Participated in code reviews and applied best practices for clean, maintainable code.",
    ],
    technologies: ["Python", "Automation", "Debugging", "Code Reviews"],
  },
  {
    company: "CodeAlpha",
    role: "Python Developer Intern",
    period: "June 2026",
    type: "Internship",
    location: "Remote / On-site",
    responsibilities: [
      "Developed Python-based applications with clean, reusable, well-documented code following industry standards.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
    technologies: ["Python", "Git", "GitHub", "Software Best Practices"],
  },
];

export const educationList = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "B.Tech in Computer Science and Engineering",
    period: "2022 – 2027",
    score: "CGPA: 8.2",
    scoreLabel: "Current CGPA",
    status: "In Progress",
    description: "Comprehensive curriculum covering algorithms, backend web systems, database design, and software engineering methodologies.",
    coursework: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "SQL",
      "Git",
      "Data Analytics",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC / 12th)",
    institution: "Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur",
    period: "2021 – 2022",
    score: "55.5%",
    scoreLabel: "Percentage",
    status: "Completed",
    description: "Higher secondary education with focus on science, mathematics, and foundational analytical reasoning.",
    coursework: ["Physics", "Chemistry", "Mathematics", "English"],
  },
  {
    degree: "Secondary School Certificate (SSC / 10th)",
    institution: "Sadhana Vidyalaya, Tavashi",
    period: "2019 – 2020",
    score: "82.4%",
    scoreLabel: "Percentage",
    status: "Completed",
    description: "Secondary schooling establishing strong academic groundwork in science and mathematics.",
    coursework: ["Mathematics", "Science", "Social Studies", "Languages"],
  },
];

export const certifications = [
  {
    id: "codealpha-python",
    issuer: "CodeAlpha",
    title: "Python Programming Internship",
    category: "Professional Internship",
    description: "Active participant at CodeAlpha Virtual Internship Program in Python Programming — 1st June 2026 to 30th June 2026. Recognized for dedication and hard work.",
    period: "Jun 2026 – Jul 2026",
    image: "/certificates/cert-codealpha-python.jpg",
    credentialId: "CA/DF1/105413",
    issuerColor: "#7c3aed",
  },
  {
    id: "google-cloud",
    issuer: "Google Cloud",
    title: "Career Launchpad — Computing Foundations",
    category: "Cloud Computing",
    description: "Successfully completed all courses and labs in the Google Cloud Career Launchpad Computing Foundations track. Issued by Google Cloud Learning Services.",
    period: "Oct 2025",
    image: "/certificates/cert-google-cloud.jpg",
    credentialId: "9CY2Iekd",
    issuerColor: "#1a73e8",
  },
  {
    id: "nptel-softskill",
    issuer: "NPTEL / IIT Kharagpur",
    title: "Soft Skill Development",
    category: "Academic Certification",
    description: "Awarded by IIT Kharagpur via NPTEL (Funded by MoE, Govt. of India) for successfully completing the 8-week Soft Skill Development course with a consolidated score of 53%.",
    period: "Jul – Sep 2025",
    image: "/certificates/cert-nptel-softskill.jpg",
    credentialId: "NPTEL25HS142S347700522",
    issuerColor: "#0369a1",
  },
  {
    id: "giristech-java",
    issuer: "Giri's Tech Hub Pvt Ltd",
    title: "Java using DSA — Training Completion",
    category: "Programming & DSA",
    description: "Certificate of Completion for successfully completing training in Java using Data Structures & Algorithms at Giri's Tech Hub Pvt Ltd, Pune. Feb 2026 – May 2026.",
    period: "Feb 2026 – May 2026",
    image: "/certificates/cert-giristech-java.jpg",
    credentialId: null,
    issuerColor: "#ea580c",
  },
  {
    id: "rtse-scholarship",
    issuer: "RTSE Scholarship Exam",
    title: "State Scholarship Awards",
    category: "Scholarship & Competition",
    description: "Gold Medal (Class 8) and Silver Medal (Class 6) awarded in the prestigious RTSE State Level Scholarship Examination.",
    period: null,
    image: null,
    credentialId: null,
    issuerColor: "#b45309",
    honors: ["Gold Medal (Class 8)", "Silver Medal (Class 6)"],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
