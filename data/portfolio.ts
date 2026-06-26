export const portfolio = {
  name: "Kaivallya Titame",
  title: "Software Developer",
  email: "kaivallyat4@gmail.com",
  phone: "+91 7378906749",
  linkedin: "https://linkedin.com/in/kaivallya-titame",
  github: "https://github.com/KaivallyaTitame",
  location: "Pune, India",
  available: true,
  summary: "2026 B.Tech IT graduate from VIIT Pune with 6 months of Software Engineering experience at Qualys. Designed and built an AI-driven agent framework using MCP servers and Playwright. Proficient in Java, Spring Boot, Angular, and REST APIs.",

  skills: {
    Languages: ["Java", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    Frameworks: ["Spring Boot", "Angular", "Express.js", "Hibernate", "JPA"],
    Databases: ["MySQL", "MongoDB"],
    "AI & Automation": ["MCP (Model Context Protocol)", "Playwright", "CDP"],
    Tools: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
    Concepts: ["REST API", "OOP", "Microservices", "Agile", "SDLC"],
  },

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Qualys",
      location: "Pune",
      period: "Jan 2026 – Jun 2026",
      points: [
        "Designed and built an AI-driven agent framework from the ground up, architecting MCP servers integrated with Playwright via CDP to enable autonomous UI navigation and multi-step workflow execution from a single natural language prompt — eliminating manual VMDR feature verification effort.",
        "Developed and maintained Spring Boot REST APIs as part of the VMDR backend, contributing to feature development and API integration within a production cybersecurity platform.",
      ],
      tech: ["Java", "Spring Boot", "MCP", "Playwright", "CDP", "REST API"],
    },
  ],

  projects: [
    {
      name: "AI-Driven Agent Framework",
      category: "AI & Automation",
      featured: true,
      desc: "Built an end-to-end AI agent framework at Qualys integrating MCP servers with Playwright via Chrome DevTools Protocol. Enables autonomous UI navigation and multi-step workflow execution from a single natural language prompt.",
      tech: ["Java", "Spring Boot", "MCP", "Playwright", "CDP"],
      github: null,
      live: null,
    },
    {
      name: "Event Hub",
      category: "Full Stack",
      featured: true,
      desc: "MEAN stack event enrollment platform with JWT authentication, role-based access control, Angular reactive form validation, RESTful APIs, and responsive Bootstrap UI.",
      tech: ["Angular", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
      github: "https://github.com/KaivallyaTitame",
      live: null,
    },
    {
      name: "Restaurant Record Management",
      category: "Full Stack",
      featured: false,
      desc: "Full-stack restaurant management system with Angular frontend, Node.js/Express REST API backend, complete CRUD operations, and MongoDB persistence.",
      tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/KaivallyaTitame",
      live: null,
    },
    {
      name: "Programmer's Calculator",
      category: "Full Stack",
      featured: false,
      desc: "Angular-based programmer's calculator with real-time state management via services, supporting arithmetic, bitwise, and base-conversion operations.",
      tech: ["Angular", "TypeScript", "Bootstrap"],
      github: "https://github.com/KaivallyaTitame",
      live: null,
    },
    {
      name: "File Packer Unpacker",
      category: "Systems",
      featured: false,
      desc: "Cross-platform tool to package and extract 50+ files with encrypted metadata. Achieved 40% faster extraction through optimized metadata handling and encryption techniques.",
      tech: ["Java"],
      github: "https://github.com/KaivallyaTitame",
      live: null,
    },
    {
      name: "Customized Virtual File System",
      category: "Systems",
      featured: false,
      desc: "Command-line VFS supporting 5+ file operations (create, open, read, write, delete). Implemented inodes, file tables, and superblocks for efficient metadata management.",
      tech: ["C", "C++"],
      github: "https://github.com/KaivallyaTitame",
      live: null,
    },
  ],

  certifications: [
    { name: "IBM Full Stack Software Developer", issuer: "Coursera & IBM", year: "March 2025" },
    { name: "Angular with MEAN Stack", issuer: "Marvellous Infosystems", year: "October 2024" },
    { name: "Data Structures & Logic Building", issuer: "Marvellous Infosystems", year: "January 2024" },
  ],

  achievements: [
    { title: "Event Manager of the Year", org: "National Institute of Event Management", year: "2025" },
    { title: "TechnoFia 2.0 Hackathon Finalist", org: "TechnoFia", year: "2025" },
    { title: "130+ DSA Problems Solved", org: "LeetCode & GeeksforGeeks", year: "Ongoing" },
  ],

  services: [
    {
      title: "Full Stack Web Apps",
      desc: "End-to-end web applications using Angular (frontend) + Node.js/Spring Boot (backend) + MongoDB/MySQL.",
      icon: "web",
    },
    {
      title: "REST API Development",
      desc: "Clean, documented REST APIs using Spring Boot or Node.js/Express with proper authentication and error handling.",
      icon: "api",
    },
    {
      title: "Angular Applications",
      desc: "Responsive, component-based Angular apps with reactive forms, state management, and API integration.",
      icon: "angular",
    },
  ],

  education: {
    degree: "B.Tech – Information Technology",
    institute: "Vishwakarma Institute of Information Technology (VIIT)",
    location: "Pune, India",
    period: "Oct 2022 – June 2026",
    gpa: "8.0 / 10",
  },
};
