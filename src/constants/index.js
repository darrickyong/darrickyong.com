import {
  backend,
  creator,
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
  threejs,
  s37,
  nisum,
  giveshop,
  shugo,
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
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Science 37",
    icon: s37,
    iconBg: "#ffffff",
    date: "September 2021 - June 2023",
    points: [
      "Led a front end team to develop a next generation reporting dashboard using React with TypeScript for clinical research staff to significantly reduce time required to determine and produce appropriate treatment plans for patients.",
      "Increased ease-of-access for medical sponsor organizations by integrating single sign-on (SSO) on their company portals.",
      "Managed and maintained a library of boilerplate on-demand report outputs, updating formatting and ogic on an adhoc basis.",
      "Generated audit trail erport data on all end-user interactions for regulatory compliance requirements.",
      "Migrated client-side file generation (.pdf, .csv, .xlsx) to server-side generation by buidling a Node.js worker in a Docker image.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nisum Technologies",
    icon: nisum,
    iconBg: "#ffffff",
    date: "March 2021 - June 2023",
    points: [
      "Built an e-commerce proof-of-concept (POC) with inventory/warehouse tracking utilizing 4 microservices using Spring Webflux, React/Redux and Apache Kafka. Deployed on Microsoft Azure in a Kubernetes cluster with a Jenkins Ci/CD pipeline.",
      "Leveraged MuleSoft and DataWeave to integrate CRUD reporting application and automate JSON data transformation.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Giveshop",
    icon: giveshop,
    iconBg: "#ffffff",
    date: "November 2020 - March 2021",
    points: [
      "Constructed minimum viable product (MVP) for a donation matching platform using Node.js with PostgreSQL and React with TypeScript.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Shugo",
    icon: shugo,
    iconBg: "#ffffff",
    date: "October 2020 - March 2021",
    points: [
      "Designed and constructed single-page application for workspace collaboration using Node.js with MongoDB and React with TypeScript.",
    ],
  },
];

export { services, technologies, experiences };
