const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/albin_joh_n/",
    platform: "Insta",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.instagram.com/albin_joh_n/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://www.instagram.com/albin_joh_n/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/albin-john-581a73274/",
  },
];


const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 80, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 13, suffix: "+", label: "Course Certifications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Analytical Thinking",
    desc: "Skilled in breaking down complex problems and building efficient, logical solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Albin brought innovation and technical expertise to the team by developing a dynamic web dashboard and integrating AI models using computer vision. His contributions greatly enhanced the interactivity and intelligence of our platform.",
    imgPath: "/images/ailogo.png",
    logoPath: "/images/ailogoo.png",
    title: "Artificial Intelligence Intern - AI4SEE",
    date: "May-2025 - Present",
    responsibilities: [
  "Developed and maintained an interactive web dashboard integrating computer vision models.",
  "Collaborated closely with UI/UX teams to visualize AI outputs and enhance user interaction.",
  "Optimized model inference and front-end performance for smooth real-time predictions.",
  ],

  },

  {
    review: "",
    imgPath: "/images/gray.png",
    logoPath: "/images/react.png",
    title: "Sportify Clone (Project)",
    date: "April-2025",
    responsibilities: [
  "Developed a responsive and visually appealing music streaming interface using React with Vite and Tailwind CSS.",
  "Implemented core UI features such as playlists, song cards, navigation, and player controls for a smooth user experience. ",
  "Used Git for version control and collaboration, enhancing code management and deployment readiness. ",
],
link: "https://casper0022.github.io/sportify_clone/",

  },


  {
    review: "",
    imgPath: "/images/gray.png",
    logoPath: "/images/python.png",
    title: "Polite Email Rewriter–Text Generation AI Model (Project)",
    date: "May-2025",
    responsibilities: [
  "Fine-tuned a GPT-2 language model to rewrite passive-aggressive or impolite sentences into polite versions using a custom dataset. ",
  "Used Hugging Face’s Trainer API with PyTorch to train and evaluate on over 1000 sentence pairs, including tokenization and prompt formatting",
  "Integrated a text-generation pipeline for inference and tested the model with real-world examples for tone transformation.",
],

  },

   {
    review: "",
    imgPath: "/images/gray.png",
    logoPath: "/images/flask.png",
    title: "Casper - Chatbot Website (Project)",
    date: "December-2024",
    responsibilities: [
  "Implemented the front-end using HTML, CSS, and JavaScript to create an interactive and user-friendly interface. ",
  "Utilized Python to host and manage the LLM, enabling advanced conversational capabilities. ",
  "Gained practical experience in deploying and hosting machine learning models on a web platform. ",
],

  },

//   {
//     review: "",
//     imgPath: "/images/gray.png",
//     logoPath: "/images/js.png",
//     title: "MyHome E-Commerce Website (Project)",
//     date: "July-2024",
//     responsibilities: [
//   "Developed an e-commerce website named MyHome to sell home products. ",
//   "mplemented front-end features using HTML, JavaScript, and CSS to create a user-friendly shopping experience. ",
//   "Gained practical experience in web development and user interface design. ",
// ],
// link: "https://casper0022.github.io/Ecommerce-Website/",

//   },
  // {
  //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "ALbin",
    mentions: "@albin",
    review:
      "Albin is Awsome",
    imgPath: "/images/client1.png",
  },
  {
    name: "ALbin",
    mentions: "@albin",
    review:
      "Albin is Nice",
    imgPath: "/images/client1.png",
  },
  {
    name: "ALbin",
    mentions: "@albin",
    review:
      "Albin is Good",
    imgPath: "/images/client1.png",
  },
  // {
  //   name: "Wade Warren",
  //   mentions: "@wadewarren",
  //   review:
  //     "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  //   imgPath: "/images/client3.png",
  // },
  // {
  //   name: "Guy Hawkins",
  //   mentions: "@guyhawkins",
  //   review:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   imgPath: "/images/client2.png",
  // },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  
};