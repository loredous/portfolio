export const bio = [
  "I'm Jeremy Banker, a Senior Software Engineer at VMware, focusing on security tooling architecture, design and implementation. I have a lifelong passion for learning and am always trying to expand my horizons and keep current with modern advances.",
  "In my free time, I am an avid amateur radio operator, working with my local county's emergency communications office. I also enjoy gardening, camping and travel.",
  "I make a point of trying to bring together the knowledge and experience from the various facets of my life, and use them to enhance the projects and products I work on. I often find that a holistic approach and a broad base of knowledge helps to reveal unconventional solutions and identify the core issues in systems.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Primary Language",
    skillName: "Python",
    color: "1",
    percentage: "95",
  },
  {
    title: "Additional Languages",
    skillName: "C#, C++, Go",
    color: "6",
    percentage: "65",
  },
  {
    title: "Platforms",
    skillName: "Kubernetes, vSphere, Docker",
    color: "4",
    percentage: "70",
  },
  {
    title: "DevOps",
    skillName: "Gitlab CI, Concourse CI, Github Actions",
    color: "7",
    percentage: "65",
  },
  {
    title: "Design and Visualization",
    skillName: "Figma, Miro, Confluence",
    color: "3",
    percentage: "70",
  },
  {
    title: "Agile",
    skillName: "Scrum, Agile",
    color: "5",
    percentage: "65",
  },
  {
    title: "Cloud",
    skillName: "AWS, Azure, GCP",
    color: "6",
    percentage: "60",
  },
];

export const projects = {
  hardwareProjects: [
    {
      projectName: "Custom VR Button Controller",
      image: "images/VR_Buttons.jpg",
      summary:
        "Developed and implemented hardware and software for custom interaction in a VR environment using an ESP32 microcontroller, Windows HID driver and custom OpenVR driver.",
      preview: "https://github.com/loredous/vr-button-bar",
      techStack: ["ESP32", "CircuitPython", "Windows HID", "OpenVR"],
    },
    {
      projectName: "Remote Solar Internet Site Monitoring and Control System",
      image: "images/Solar.png",
      summary:
        "Developed and implemented hardware and software for monitoring and control of a remote, wireless connected, solar power and battery backup system including charge management, fault detection and self-healing capability.",
      preview: "",
      techStack: ["RS-232", "Solar Power", "PHP", "Python"],
    }
  ],
  softwareProjects: [
    {
      projectName: "Ham GUI / HamPI",
      image: "images/HamPI.jpg",
      summary:
        "Touch-friendly UI application for management of an amateur radio station, with a focus on service management for emergency digital communications operation.",
      preview: "https://github.com/loredous/ham-gui",
      techStack: ["Python", "GUI", "Service Management", "Plugin Architecture"],
    },
    {
      projectName: "Amateur Radio Packet Messaging Manager",
      image: "images/Amateur_Radio.png",
      summary:
        "Native Python implementation of multiple amateur radio data exchange protocols. Connection handling via multiple nested state machines. Asynchronous handling of multiple simultaneous connections.",
      preview: "https://github.com/loredous/mpmm",
      techStack: ["Python", "Digital Protocols", "Library Design", "Amateur Radio"],
    },
    {
      projectName: "Discord Quizbot",
      image: "images/Discord_Bot.png",
      summary:
        "Configurable Discord bot designed to present multiple-choice quiz to new users joining a server, with a goal of increasing server rule adherence.",
      preview: "https://github.com/loredous/discord-join-quiz-bot",
      techStack: ["Python", "Discord Bot"],
    }
  ],
  openSourceCommunities: [
    {
      projectName: "VMware Build Inspector",
      image: "images/VMW_OSS.png",
      summary:
        "The Build Inspector service is designed to provide the ability to process plaintext CI/CD build and deployment logs, extract any available software dependency information along with information about actions being taken in the build pipeline that could be vectors for a potential compromise.",
      preview: "https://github.com/vmware-labs/build-inspector",
      techStack: ["Python", "Supply Chain Security", "Containers", "YARA", "FastAPI"]
    }
  ],
};

export const certifications = {
  securityCerts: [
    {
      projectName: "EC-Council CEH",
      image: "images/CEH_Badge.png",
      summary:
        "A Certified Ethical Hacker is a skilled professional who understands and knows how to look for weaknesses and vulnerabilities in target systems and uses the same knowledge and tools as a malicious hacker, but in a lawful and legitimate manner to assess the security posture of a target system(s). The CEH credential certifies individuals in the specific network security discipline of Ethical Hacking from a vendor-neutral perspective.",
      preview: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
      techStack: ["Penetration Testing", "Ethical Hacking", "Cloud Security", "Cryptography", "Scanning and Enumeration"],
    },
    {
      projectName: "EC-Council CHFI",
      image: "images/CHFI_Badge.png",
      summary:
        "A CHFI is a skilled professional trained in the application of computer investigation and analysis techniques in the interests of determining potential legal evidence. CHFI certified professionals are aware of legally sound detailed methodological approach to computer forensics and evidence analysis.",
      preview: "https://www.eccouncil.org/train-certify/computer-hacking-forensic-investigator-chfi/",
      techStack: ["Evidence Handling", "Computer Forensics", "Cyberlaw",],
    }
  ],
  platformCerts: [
    {
      projectName: "Certified Kubernetes Application Developer",
      image: "images/CKAD_Badge.png",
      summary:
        "The Certified Kubernetes Application Developer (CKAD) can design, build and deploy cloud-native applications for Kubernetes. A CKAD can define application resources and use Kubernetes core primitives to create/migrate, configure, expose and observe scalable applications.",
      preview: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
      techStack: ["Kubernetes", "Conatainers", "Cloud Native Architecture"],
    },
    {
      projectName: "VMware VCP-DCV",
      image: "images/VCP_Badge.png",
      summary:
        "The VCP-DCV certification validates candidate skills to implement, manage, and troubleshoot a vSphere infrastructure, using best practices to provide a powerful, flexible, and secure foundation for business agility that can accelerate the transformation to cloud computing.",
      preview: "https://www.vmware.com/learning/certification/vcp-dcv.html",
      techStack: ["VMware vSphere", "Virtual Machines"],
    }
  ],
  otherCerts: [
    {
      projectName: "Red Hat Certified Systems Administrator",
      image: "images/RHCSA_Badge.jpg",
      summary:
        "A Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments.",
      preview: "https://www.redhat.com/en/services/certification/rhcsa",
      techStack: ["Linux", "Red Hat", "Systems Administration"],
    },
    {
      projectName: "SUSE Certified Adminstrator",
      image: "images/SCA_Badge.png",
      summary:
        "The SCA certification validates a candidate's fundamental knowledge of the Linux operating system and ability to properly administer SLES 15 at a standard sysadmin level. ",
      preview: "https://www.redhat.com/en/services/certification/rhcsa",
      techStack: ["Linux", "SUSE", "Systems Administration"],
    }
  ],
};

export const talks = [
  {
    title: "Introduction to Amateur Packet Radio",
    link: "https://www.youtube.com/watch?v=Wo0MDBrOSK8#t=47s",
    image: "https://img.youtube.com/vi/Wo0MDBrOSK8/mqdefault.jpg",
    description: "An introduction to amateur packet radio concepts, along with training on configuration of various software and hardware components commonly found in packet radio." ,
    categories: ["Amateur Radio", "Packet Radio", "Winlink"]
  },
  {
    title: "(Upcoming: 6/8/2023) Adding Continuous Inspection to Your CI/CD Pipelines with Build Inspector Open Source",
    link: "https://iplanit.swoogo.com/RMISC2023/session/1408933/a1-adding-continuous-inspection-to-your-cicd-pipelines-with-build-inspector-open-source",
    image: "https://assets.swoogo.com/uploads/medium/119020-5aafec2c5e08d.jpg",
    description: "Introduction and use cases for the Build Inspector open source service. Learn how you can use the open source Build Inspector service from VMware to inspect your build pipeline logs to extract build and test dependencies, along with identifying signs of potential risk or compromise." ,
    categories: ["Supply Chain Security", "Build Inspector", "Open Source"]
  },
  {
    title: "(Upcoming: 8/9/2023) Build Inspector at BlackHat Arsenal",
    link: "https://www.blackhat.com/us-23/arsenal-overview.html",
    image: "https://www.blackhat.com/images/logo.png",
    description: "Come see Build Inspector open source <b>LIVE</b> at BlackHat Arsenal USA 2023." ,
    categories: ["Supply Chain Security", "Build Inspector", "Open Source"]
  }
]

export const experience = [
  {
    title: "VMware",
    duration: "May 2018 - Present",
    subtitle: "Software Engineer",
    details: [
      "Full-lifecycle handling of custom software solutions for VMware IT Security and Resiliency organization",
      "Product Owner and developer for internal and open source offering designed to identify consumed dependencies and potential sources of risk in CI/CD pipelines and software builds",
      "Architected and implemented cloud-deployed pipeline handling collection, filtering and transport of ~14TB daily log flows into on-premise SIEM with average 99% uptime",
      "Designed and created internal tooling for automated discovery and identification of network systems impacted by Log4Shell vulnerability",
      "Author and present executive-level overview as well as technical deep-dive presentations at internal developer and security conferences",
      "Championed internal adoption of InnerSource and Open Source processes and policies for relevant product offerings"
    ],
    tags: ["Python", "Supply Chain Security", "Compliance", "Kubernetes", "CI/CD", "DevOps"],
    icon: "fa-brands fa-python",
  },
  {
    title: "VMware",
    duration: "August 2015 - April 2018",
    subtitle: "Sr. Technical Support Engineer",
    details: [
      "Provided Tier 3 support for VMware VDI and enterprise virtualization software, including high-visibility global customer environments",
      "Authored and presented live and recorded training sessions for global support team",
      "Created modular CLI tooling to automate log analysis from customer environments, resulting in 50% reduction of time spent on manual analysis and 20% global reduction in MTTR",
      "Drove team achievement of 95%+ NPS on customer satisfaction surveys",
    ],
    tags: ["VMware Horizon VDI", "Technical Support"],
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Zoll Data",
    duration: "June 2014 - July 2015",
    subtitle: "Software Engineer",
    details: [
      "Development of medical data collection application used to enhance the level of service provided by paramedic and fire organizations nationwide, and report required medical data to government entities",
      "Collaborated with support, field and customer resources to resolve customer-impacting software defects in a timely manner to avoid service interruptions for emergency personnel",
      "Headed team to redefine source control and build processes, leading to measurable decrease in lost time due to build issues"
    ],
    tags: ["C#", "Agile Scrum", "ASP.NET", "Automated Testing"],
    icon: "fa-solid fa-heart-pulse",
  },
];

export const education = [
  {
    title: "Masters in Cybersecurity and Information Assurance",
    duration: "",
    subtitle: "Western Governors University",
    details: [
      "Successfully completed my Masters degree from Western Governors University, graduating in March of 2020",
      "Earned EC-Council CEH and CHFI certifications during coursework",
      "Capstone project covering the design, implementation, and benefits of a automated security control validation system"
    ],
    tags: [
      "Ethical Hacking",
      "Secure Software Design",
      "Computer Forensics",
      "Security Operations",
      "Cloud Security",
      "Security Compliance",
    ],
    icon: "fa-solid fa-user-graduate",
  },
  {
    title: "Bachelors in Networking and Communications Management",
    duration: "",
    subtitle: "DeVry University",
    details: [
      "Successfully completed my Bachelors degree from DeVry University, graduating in October of 2015",
    ],
    tags: ["Network Design", "VoIP Communications", "Wireless Network Design", "Advanced Networking Protocols", "Advanced Routing Protocols"],
    icon: "fa-solid fa-user-graduate",
  },
];

export const footer = [
  {
    label: "Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/loredous",
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/jbanker/",
      }
    ],
  },
  {
    label: "Settings",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/loredous/portfolio",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/loredous",
      },
      {
        text: "Resume",
        link: "documents/JeremyBanker-06032023.pdf",
      },
      {
        text: "Contact Information",
        link: "documents/contact.vcf",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Original Template created by Vinay Somawat (https://github.com/vinaysomawat/vinaysomawat.github.io)",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "loredous";