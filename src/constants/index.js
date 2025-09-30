import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  sql,
  php,
  codesoft,
  sih,
  coding,
  task_manager,
  travel_advisor,
  wanderlust,
  discuss_dashboard,
  short_url,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Node Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Php Developer",
    icon: php,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 {
  title: "Codesoft Intern",
  icon: codesoft,
  iconBg: "#E6DEDD",
  date: "Jul 2024 - Aug 2024",
  points: [
    "Completed a full web designing internship focused on building responsive and modern websites.",
    "Worked on HTML, CSS, and JavaScript projects to strengthen frontend development skills.",
    "Gained hands-on experience with real-world client projects.",
    "Improved website performance and user experience through clean and structured code.",
  ],
},
{
  title: "TechnoHack Intern",
  icon: codesoft,
  iconBg: "#E6DEDD",
  date: "May 2024 - June 2024",
  points: [
    "Worked on a one-month C++ programming internship.",
    "Solved practical coding challenges to improve problem-solving and logic-building skills.",
    "Learned and applied Object-Oriented Programming (OOP) concepts in C++.",
    "Built small projects and programs to demonstrate knowledge in C++.",
  ],
},
{
  title: "SIH Finalist",
  icon: sih,
  iconBg: "#383E56",
  date: "Dec 2024",
  points: [
    "Secured a Top 3 position in the Smart India Hackathon at the national level.",
    "Worked as a Frontend Developer, designing and developing scalable UI components.",
    "Project focused on automating bus scheduling with advanced AI integration.",
    "Collaborated with team members under strict deadlines to deliver impactful solutions.",
  ],
},
{
  title: "Full Stack Developer (Freelancing)",
  icon: codesoft,
  iconBg: "#E6DEDD",
  date: "2023 - Present",
  points: [
    "Designed and developed full-stack projects for clients using MERN stack (MongoDB, Express, React, Node.js).",
    "Built secure and scalable REST APIs for client applications.",
    "Created responsive and user-friendly UI using React and modern CSS practices.",
    "Delivered projects on time with proper documentation and deployment.",
  ],
},
{
  title: "Multiple College Event Wins",
  icon: coding,
  iconBg: "#E6DEDD",
  date: "2022 - Present",
  points: [
    "Won several first-place prizes in coding and web development competitions.",
    "Demonstrated strong problem-solving and analytical skills through DSA contests.",
    "Collaborated with peers in team-based hackathons and coding events.",
    "Recognized for creativity, efficiency, and technical expertise in solutions.",
  ],
},

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task - Manager",
    description:
      "A productivity web app that helps users create, update, and organize tasks with a clean UI. Supports CRUD operations and persistent storage for efficient workflow management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: task_manager,
    source_code_link: "https://github.com/Subhajit-sahu/Task-Manager",
    live_site_link : "https://task-manager-frontend-jyat.onrender.com/"
  },
  {
    name: "Travel - Advisor",
    description:
      "A web application that suggests restaurants, hotels, and attractions based on the user’s location using Google Maps and third-party APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: travel_advisor,
    source_code_link: "https://github.com/Subhajit-sahu/Travel-advisor",
    live_site_link : "https://traveladvisor360.netlify.app/",
  },
  {
    name: "Hotel Rental Platform",
    description:
      "A full-stack platform inspired by Airbnb, allowing users to browse, book, and manage hotel rentals with authentication and database integration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wanderlust,
    source_code_link: "https://github.com/Subhajit-sahu/Wanderlust",
    live_site_link : "https://wanderlust-13w5.onrender.com/listings",
  },
  {
    name: "Discuss Dashboard",
    description:
      "A discussion platform where users can post questions, share answers, and engage in community-driven conversations. Features a clean dashboard UI for managing content.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: discuss_dashboard,
    source_code_link: "https://github.com/Subhajit-sahu/discuss-dashboard",
    live_site_link : "http://discussdashboard.ct.ws/",
  },
  {
    name: "Shorten URL",
    description:
      "A URL shortener application that allows users to generate custom short links, track clicks, and manage URLs efficiently.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: short_url,
    source_code_link: "https://github.com/Subhajit-sahu/short-url",
    live_site_link : "https://shorten-url-f02w.onrender.com/",
  },
];
const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Gandhi Engineering College, Bhubaneswar",
    year: "2022 - 2026",
    cgpa : "8.67",
    details: [
      "Specialization in Web Development",
      "Involved in multiple hackathons",
    ],
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Excelsior Higher Secondary School, Jajpur ,Odisha",
    year: "2020 - 2022",
    percentage: "89.4%",
    board: "CHSE",
    details: ["Physics, Chemistry, Mathematics"],
  },
  {
    degree: "Secondary (Class X)",
    institution: "Manpur High School, Jajpur, Odisha",
    year: "2019 - 2020",
    percentage: "80%",
    board: "BSE",
    details: ["General Science, Mathematics, English"],
  },
];



export { services, technologies, experiences, testimonials, projects ,education};
