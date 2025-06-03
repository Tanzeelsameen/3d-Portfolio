import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  nodejs,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  travel,
  sciencecollege,
  cnergee,
  bitsolve,
  mayura,
  mgm,
  extension,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
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
    name: "Next JS",
    icon: nextJs,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front-End Engineer",
    company_name: "Mayura Consultancy Services",
    company_website: "https://www.mayuraconsultancy.com/",
    icon: mayura,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      " Improved the frontend by developing robust, reusable components, leading to a more efficient and maintainable codebase.Contributed over 2000 lines of code.",
      "Boosted team efficiency by 50% by implementing monorepo architecture and reusable Design-System.",
      "Worked on live projects, ensuring timely delivery and smooth implementation.Actively incorporated client feedback to refine designs and deliver solutions aligned with their requirements.",
      "Contributed to more than 10 global projects, including lyftyng.com, siruandu, Cnergee global, 369nft.com showcasing adaptability and attention to detail",
      " Designed and optimized user interfaces for GMLM projects, ensuring visually appealing and functional website representations",
      "Integrated unit testing with 80% code coverage, enhancing code reliability and reducing bugs.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Bitsolve Technologies Pvt. Ltd.",
    company_website: "https://bitsolve.in/",
    icon: bitsolve,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Developing and maintaining web and mobile applications using HTMl, CSS , Javascript , Bootstrap , Codeigniter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked with the team to contribute to ongoing live projects on LMS, MIS, CMS and other initiatives.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student",
    company_name: "MGM's college Of Engineering, Nanded",
    company_website: "https://mgmcen.ac.in/",
    icon: mgm,
    iconBg: "#E6DEDD",
    date: "June 2020 - June 2024",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  // {
  //   title: "Software Engineer Intern",
  //   company_name: "Skillrisers",
  //   company_website: "https://www.skillrisers.com/",
  //   icon: skillrisers,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2020 - Jul 2020",
  //   points: [
  //     "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
  //     "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
  //     "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
  //     "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Self-employed",
  //   company_website: "https://proximus.surge.sh/index.html",
  //   icon: proximus,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2018 - Jan 2021",
  //   points: [
  //     "Spearheaded the development of a fully responsive website for the college coding society.",
  //     "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
  //     "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
  //     "Curated and designed challenging coding problems for college competitions.",
  //   ],
  // },
];

const projects = [
  {
    name: "AI Travel Planner Agent",
    description:
      " An Intelligent web application that creates personalized travel itineraries based on user preferences.Customized itineraries based on location, dates, budget, and interests.Comprehensive plans including day-by-day schedules, accommodations, attractions, food recommendations, and cost breakdowns. AI-generated detailed travel plans using Gemini AI, Interactive chat assistant for follow-up questions about your trip",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    hosted_link: "https://travel-planner-agent.netlify.app/",
  },
   {
    name: "AI-Content Summarizer",
    description:
      "Developed an AI-powered content summarizer that extracts key information from lengthy articles, research papers, and documents. The tool uses advanced natural language processing techniques to provide concise summaries, making it easier for users to grasp essential points quickly. Developed an AI-powered Chrome Extension using Google's Gemini API to summarize web content in real-time, offering three summarizartion modes (brief,detailed,bullet) and improving content comprehension by 60%.   ",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: extension,
    hosted_link:
      "https://github.com/Tanzeelsameen/concise-insight-chrome",
  },
  {
    name: " Learning Management System",
    description:
      "Developed a comprehensive Learning Management System(LMS) for Science College, Nanded,enhancing online education and academic management.the LMS project offers a dynamic and intuitive interface for educators, administrators, and learners, enabling them to collaborate, engage, and succeed in today’s digital learning environment",
    tags: [
      {
        name: "Codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sciencecollege,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Cnergee Global",
    description:
      "Designed and Developed ",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Codeigniter",
        color: "pink-text-gradient",
      },
    ],
    image: cnergee,
    hosted_link: "https://www.cnergeeglobal.com/",
  },
 
  // {
  //   name: "Roll Web",
  //   description:
  //     "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "formik",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollWeb,
  //   hosted_link: "https://app.tryroll.com/",
  // },
  // {
  //   name: "Roll App",
  //   description:
  //     "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
  //   tags: [
  //     {
  //       name: "react-native-web",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "storybook",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollApp,
  //   hosted_link:
  //     "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  // },
];

const personalInfo = {
  name: "Tanzeela",
  fullName: "Tanzeela Sameen",
  email: "tanzeelasameen13@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, Bootstrap and Codeigniter etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1hzrgAtQdExN1Qf5hbSPRPU5Rq8UdUQXi/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/tanzeela-sameen/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Tanzeelsameen",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
