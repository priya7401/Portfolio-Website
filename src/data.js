import img1 from "./images/cv.jpg";
import img2 from "./images/react-mini-projects.jpg";
import img3 from "./images/jwtAuth.jpg";

const projects = [
    {
        title : "Portfolio Website",
        subtitle : "React js",
        description : "To start my React learning journey, I created a simple portfolio website using React. The github domain is used to host this website. I learned the fundamentals of React - components, ES6 import and export modules - through this project. It also helped me brush up on my Javascript fundamentals, such as array maps and filters.",
        image : img1,
        link : "https://priya7401.github.io/Portfolio-Website",
    },

    {
        title : "React Mini Projects",
        subtitle : "React.js",
        description : "This repository contains a collection of React-based mini projects. I learned about React components, hooks, props, states, and effects as a result of these projects.",
        image : img2,
        link : "https://github.com/priya7401/React-mini-projects",
    },

    {
        title : "JWT Authentication",
        subtitle : "MERN Stack and JWT Authentication",
        description : "These days, authentication and security are top priorities. I created this project to understand about the authentication process and how it works in the backend. This is a simple JWT-based (JSON Web Token) user authentication project. ",
        image : img3,
        link : "https://github.com/priya7401/jwt-auth",
    },

]

const skills = [
    "C++", "HTML", "CSS", "JavaScript", "Node.js", "React.js", "Express", "MongoDB"
]

export {projects, skills};