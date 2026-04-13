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
  okta,
  veroskills,
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
    title: 'Software Engineer',
    company_name: 'Okta / Auth0',
    icon: okta,
    iconBg: '#ffffff',
    date: 'May 2024 - Present',
    points: [
      'Led adoption of JWT client authentication (JWTCA) within Auth0 support services, minimizing credential-related operational overhead while hardening security posture.',
      'Engineered a developer quickstart feature that auto-configures authentication and generates environment files for new Auth0 applications, reducing developer setup time by 90%.',
      "Migrated the Auth0 developer documentation platform from Docusaurus to Mintlify's Git-based docs-as-code architecture, improving content discoverability and reducing docs-related support tickets by 80%.",
      'Architected a pipeline that auto-generates MDX documentation from internal OpenAPI specs and publishes updates to a public Auth0 repository using Github Actions, eliminating manual documentation updates.',
      'Implemented service APIs that integrate Auth0 systems with a centralized PII deletion framework, enabling detection and removal of customer data to support compliance and customer data lifecycle management.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Veroskills',
    icon: veroskills,
    iconBg: '#ffffff',
    date: 'September 2023 - May 2024',
    points: [
      'Established standardized Course Library instruction videos and progress tracking, boosting member comprehension and engagement along with minimizing confusion in the learning outcomes.',
      'Mentored learners through personalized instruction and tutoring tailored to individual learning styles.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Science 37',
    icon: s37,
    iconBg: '#ffffff',
    date: 'September 2021 - June 2023',
    points: [
      'Engineered a clinical reporting dashboard using React / Redux with TypeScript, reducing time for research staff to assess and generate treatment plans by 80%.',
      "Integrated OAuth 2.0 within sponsor organizations' company portals, enabling seamless SSO synchronization and enhanced user convenience and security.",
      'Implemented audit tracking and reporting systems, capturing trial staff and patient interactions with clinical trial forms.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Nisum Technologies',
    icon: nisum,
    iconBg: '#ffffff',
    date: 'March 2021 - September 2021',
    points: [
      'Engineered a multi-tenant e-commerce solution using Spring WebFlux and React, enabling rapid storefront deployment for scaling brands that could reduce infrastructure overhead by up to 75%.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Shugo',
    icon: shugo,
    iconBg: '#ffffff',
    date: 'October 2019 - March 2021',
    points: [
      'Designed a React + TypeScript SPA for workforce resource management and project planning.',
      'Implemented a custom WebRTC signaling server enabling real-time chat and video communication within the platform.',
    ],
  },
];

export { services, technologies, experiences };
