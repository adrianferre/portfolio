import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adrián Ferré | Full Stack Developer',
  lang: 'en',
  description: "I'm Adrián Ferré welcome to my portfolio",
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Adrián Ferré',
  subtitle: "I'm a passionate Full Stack Developer.",
  cta: '<Know more />',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'My passion is to create software solutions that help people do things efficiently, with fewer errors, and a great experience. Embrace innovation and challenges as a way for me to go always one step forward.',
  paragraphTwo:
    "I'm always looking to learn new things and also share what I learned with my students an colleges.",
  paragraphThree:
    "I'm working with React, Redux, Node, MongoDB Stack, and defining the Front End architecture.",
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sirena.png',
    title: 'Sirena',
    info: '',
    info2: '',
    url: 'https://www.sirena.app/',
    appUrl: 'https://web.sirena.app/',
  },
  {
    id: nanoid(),
    img: 'coderhouse.png',
    title: 'Coder House',
    info: '',
    info2: '',
    url: 'https://www.coderhouse.com/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'adrian_c4@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adrianferre/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adrianferre',
    },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
  ],
};
