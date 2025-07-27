import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  BlogApp,
  Budbot,
  HubEx,
  FlowTrade,
  sketcher,
  mathwork,
  solidity,
  CompileVortex,
  eduskill,
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

export const services = [
  { title: "react", icon: reactjs },
  { title: "node", icon: nodejs },
  { title: "Solidity", icon: solidity },
  { title: "Java Scripts", icon: javascript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "solidity", icon: solidity },
];

export const experiences = [
  {
    title: "Full stack intern",
    company_name: "App Click Tech Academy",
    icon: eduskill,
    iconBg: "#161329",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Acquired hands-on knowledge in front-end development with a strong focus on JavaScript and React, building dynamic user interfaces and interactive web applications. Also gained foundational understanding of modern development practices, including component-based architecture, state management, and responsive design.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "Teamcreative Studio",
    icon: mathwork,
    iconBg: "#161329",
    date: "Feb 2024 - Now",
    points: [
      "I build and maintain scalable web applications, combining sleek front-end design with robust back-end functionality. Using tools like React.js, Node.js, and MongoDB, I help bring creative ideas to life through clean, efficient code and seamless user experiences.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "March 2025 - Now",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "BudAI (SOLANA)",
    description:
      "Designed an Crypto Trading Bot which provides user an feature of auto trading, copy trading trader’s address, and alot of feature in it",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "Budai", color: "yellow-text-gradient" },
    ],
    image: Budbot,
    source_code_link: "https://t.me/budai_trade_bot",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Hubexchange App",
    description:
      " specialize in decentralized trading, enabling instant swaps, yield farming, and liquidity provision with low fees and maximum transparency. By integrating multi-chain support and cutting-edge technology,",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "html & css", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
    ],
    image: HubEx,
    source_code_link:
      "https://hubexchange.vercel.app",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Multi-User Blog Application (Medium Clone)",
    description:
      " multi user blog application provides users functionalities and to do CRUD over blogs on application. ",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "OOps", color: "green-text-gradient" },
      { name: "Mern Stack", color: "pink-text-gradient" },
    ],

    image: BlogApp,
    source_code_link: "https://l4-news.onrender.com/",
  },
];
