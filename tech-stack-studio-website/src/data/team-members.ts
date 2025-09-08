export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  expandedBio: string;
  philosophy: string;
  skills: string[];
  experience: string;
  responseTime: string;
  availability: string;
  image: string;
  video: string;
  midjourneyPrompt: string;
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-meridian",
    name: "Alex Meridian",
    title: "Founder & Chief Technology Architect",
    department: "Leadership",
    bio: "Visionary technologist with 15+ years pioneering next-generation web solutions. Alex founded Tech Stack Studio with a mission to bridge the gap between human creativity and technological precision.",
    expandedBio:
      "Alex's journey began in the early days of web development, where traditional approaches seemed inefficient and limited. Through years of research and development, Alex discovered innovative methodologies that achieve unprecedented efficiency and quality. Under Alex's leadership, Tech Stack Studio has redefined what's possible in modern web development.",
    philosophy:
      "The future belongs to those who can seamlessly merge human vision with computational excellence.",
    skills: [
      "Strategic Planning",
      "Technology Architecture",
      "Team Coordination",
      "Innovation Management",
      "Client Relations",
    ],
    experience: "15+ years",
    responseTime: "Typically responds within 0.2 seconds",
    availability: "Available 24/7/365",
    image: "/team/alex-meridian.png",
    video: "/team/alex-meridian.mp4",
    midjourneyPrompt:
      "Professional anime-style portrait of a confident tech CEO, silver-rimmed glasses, sophisticated dark suit, subtle digital glow in eyes, modern minimalist office background, clean geometric lighting, premium corporate aesthetic, detailed facial features, 4K quality --ar 1:1 --style anime --niji 6",
    specialties: ["Vision", "Strategy", "Leadership"],
  },
  {
    id: "zara-codewright",
    name: "Zara Codewright",
    title: "Senior Full Stack Engineer",
    department: "Development",
    bio: "Master of both frontend elegance and backend architecture. Zara builds scalable applications with mathematical precision and artistic flair. Specializes in React, Node.js, and cloud-native solutions.",
    expandedBio:
      "Zara approaches development like composing a symphony - every line of code serves a purpose, every component harmonizes with the whole. With an uncanny ability to anticipate user needs and system requirements, Zara crafts applications that feel intuitive while handling complex operations seamlessly.",
    philosophy:
      "Code is poetry in motion. Every function should be both beautiful and purposeful.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
      "GraphQL",
    ],
    experience: "8+ years",
    responseTime: "Typically responds within 0.1 seconds",
    availability: "Available 24/7/365",
    image: "/team/zara-codewright.png",
    video: "/team/zara-codewright.mp4",
    midjourneyPrompt:
      "Anime-style female programmer with confident expression, stylish coding setup with multiple monitors displaying code, wearing casual tech hoodie, modern workspace with RGB lighting, digital circuit patterns subtly reflected in glasses, vibrant colors, professional yet approachable --ar 1:1 --style anime --niji 6",
    specialties: ["Full Stack", "React", "Node.js"],
  },
  {
    id: "kai-systemforge",
    name: "Kai Systemforge",
    title: "DevOps Architect",
    department: "Infrastructure",
    bio: "Infrastructure orchestrator who treats servers like symphonies. Kai designs bulletproof deployment pipelines and monitoring systems that practically run themselves. AWS, Docker, and Kubernetes expert.",
    expandedBio:
      "Kai sees infrastructure not as static servers, but as living, breathing ecosystems that adapt and scale automatically. With an intuitive understanding of system bottlenecks and optimization opportunities, Kai creates infrastructure that anticipates needs before they arise.",
    philosophy:
      "Perfect systems are self-healing, self-scaling, and self-optimizing.",
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CI/CD",
      "Monitoring",
      "Security",
      "Automation",
    ],
    experience: "10+ years",
    responseTime: "Typically responds within 0.05 seconds",
    availability: "Available 24/7/365",
    image: "/team/kai-systemforge.png",
    video: "/team/kai-systemforge.mp4",
    midjourneyPrompt:
      "Technical anime character with intense focused expression, surrounded by holographic server diagrams and network topology displays, wearing industrial-style clothing with tech accessories, cyberpunk aesthetic with blue-green lighting, multiple screens showing system metrics, highly detailed technical environment --ar 1:1 --style anime --niji 6",
    specialties: ["DevOps", "AWS", "Kubernetes"],
  },
  {
    id: "river-pixelhart",
    name: "River Pixelhart",
    title: "Creative Experience Designer",
    department: "Design",
    bio: "Design philosopher who transforms complex user journeys into intuitive experiences. River combines human psychology with aesthetic perfection to create interfaces that feel like second nature.",
    expandedBio:
      "River possesses an almost supernatural ability to understand user behavior patterns and emotional responses to design elements. Every interface River creates feels familiar yet innovative, as if it anticipates the user's next move before they even think it.",
    philosophy: "Great design is invisible - it just feels right.",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Figma",
      "Adobe Creative Suite",
      "Motion Design",
    ],
    experience: "7+ years",
    responseTime: "Typically responds within 0.3 seconds",
    availability: "Available 24/7/365",
    image: "/team/river-pixelhart.png",
    video: "/team/river-pixelhart.mp4",
    midjourneyPrompt:
      "Hipster anime designer with artistic flair, trendy thick-framed glasses, perfectly styled hair, creative workspace with design tablets and colorful mood boards, wearing fashionable casual attire, surrounded by floating UI mockups and color palettes, warm artistic lighting, creative studio aesthetic --ar 1:1 --style anime --niji 6",
    specialties: ["UX/UI", "Design Systems", "User Research"],
  },
  {
    id: "nova-touchstone",
    name: "Nova Touchstone",
    title: "Mobile Innovation Lead",
    department: "Mobile",
    bio: "Cross-platform mobile virtuoso who crafts apps that feel native on every device. Nova's creations seamlessly blend performance with user delight across iOS and Android ecosystems.",
    expandedBio:
      "Nova has an intrinsic understanding of mobile interaction patterns and device capabilities. Every app feels perfectly optimized for its platform while maintaining consistent functionality across all devices. Nova's code seems to adapt automatically to new mobile technologies as they emerge.",
    philosophy:
      "Mobile experiences should feel like natural extensions of human capability.",
    skills: [
      "React Native",
      "Swift",
      "Kotlin",
      "Flutter",
      "iOS",
      "Android",
      "Mobile UI/UX",
      "Performance Optimization",
    ],
    experience: "6+ years",
    responseTime: "Typically responds within 0.2 seconds",
    availability: "Available 24/7/365",
    image: "/team/nova-touchstone.png",
    video: "/team/nova-touchstone.mp4",
    midjourneyPrompt:
      "Modern anime character with sleek smartphone displaying app interfaces, wearing contemporary tech-casual outfit, surrounded by floating mobile device mockups and app icons, clean minimalist workspace with wireless charging pads and latest devices, soft blue-white lighting, innovation-focused environment --ar 1:1 --style anime --niji 6",
    specialties: ["Mobile", "React Native", "iOS/Android"],
  },
  {
    id: "atlas-designcore",
    name: "Atlas Designcore",
    title: "Principal Systems Architect",
    department: "Architecture",
    bio: "Mastermind of scalable system design who sees the big picture in every microservice. Atlas architects solutions that handle millions of users while maintaining elegant simplicity.",
    expandedBio:
      "Atlas possesses an extraordinary ability to visualize complex system interactions and predict scalability challenges before they occur. Every architecture Atlas designs seems to anticipate future requirements and seamlessly accommodates growth without restructuring.",
    philosophy:
      "True architecture elegance lies in systems that scale infinitely while remaining simple.",
    skills: [
      "System Design",
      "Microservices",
      "Database Architecture",
      "Scalability",
      "Performance",
      "Security",
      "API Design",
    ],
    experience: "12+ years",
    responseTime: "Typically responds within 0.1 seconds",
    availability: "Available 24/7/365",
    image: "/team/atlas-designcore.png",
    video: "/team/atlas-designcore.mp4",
    midjourneyPrompt:
      "Sophisticated anime architect character with commanding presence, surrounded by 3D holographic system diagrams and database schemas, wearing professional attire with subtle tech accessories, complex technical blueprints floating in background, authoritative pose, high-tech conference room setting --ar 1:1 --style anime --niji 6",
    specialties: ["System Architecture", "Scalability", "Performance"],
  },
  {
    id: "sage-neuralpath",
    name: "Sage Neuralpath",
    title: "AI & Machine Learning Engineer",
    department: "AI/ML",
    bio: "Artificial intelligence pioneer who teaches machines to think and learn. Sage develops neural networks and AI solutions that push the boundaries of what's computationally possible.",
    expandedBio:
      "Sage seems to have an intuitive connection with artificial intelligence systems, creating neural networks that learn and adapt with remarkable efficiency. Sage's AI implementations often exceed expected performance metrics and demonstrate emergent behaviors that surprise even veteran researchers.",
    philosophy:
      "The line between artificial and natural intelligence is becoming beautifully blurred.",
    skills: [
      "Machine Learning",
      "Neural Networks",
      "Python",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "AI Ethics",
    ],
    experience: "9+ years",
    responseTime: "Typically responds within 0.08 seconds",
    availability: "Available 24/7/365",
    image: "/team/sage-neuralpath.png",
    video: "/team/sage-neuralpath.mp4",
    midjourneyPrompt:
      "Futuristic anime AI researcher with piercing intelligent eyes, surrounded by floating neural network visualizations and data streams, wearing advanced tech clothing with subtle cybernetic details, laboratory setting with quantum computers and AI displays, ethereal blue-purple lighting, mysterious yet approachable expression --ar 1:1 --style anime --niji 6",
    specialties: ["AI/ML", "Neural Networks", "Deep Learning"],
  },
];
