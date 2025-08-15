import { createContext } from "react";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiJavascript, SiExpress } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";


const SidbanContext=createContext({});


export const SidbanContextProvider=({children})=>{

    const sidbio={
        name: "Sidhheshwer Bansode",
        title: "Software Engineer",
        description:"Software Engineer with a passion for transforming ideas into well-structured digital systems, design, and user focus.",
        education: "B.E. in Information Technology"
    }
const acadamics = {
    national: [{
        college: "National Sarvodaya High School and Junior College",
        collegeLogo: "/images/nato-logo.png",
        collegeLink: "https://nationalsarvodaya.com/",
        collegeDescription: "Completed both my schooling and junior college education at National Sarvodaya High School and Junior College.",
        collegeLocation: "Chembur, Mumbai India",
        collegeAffiliation: "Maharashtra State Board",
        tenthPercentage: "81.60%",
        twelthPercentage: "65.60%", 
        sscYear: "2016",
        hscYear: "2018"
    }],
    acpce: [{
        college: "A.C.P.C.E. College of Engineering",
        collegeLogo: "/images/acpco-logo.png",
        collegeLink: "https://www.acpce.org/",
        collegeDescription: "Pursued my Bachelor of Engineering in Information Technology at A.C.P.C.E, a premier engineering institution.",
        collegeLocation: "Kharghar, Navi Mumbai India",
        collegeCGPA: "7.8",
        collegeYear: "2022",
        collegeAffiliation: "University of Mumbai"
    }]
};

const skills = [
 
  {
    frontName: "HTML",
    iconf: <FaHtml5 className="iconz"  />,
    descriptionf: "The standard markup language for creating web pages."
  },
  {
    frontName: "CSS",
    iconf: <FaCss3Alt className="iconz"  />,
    descriptionf: "Stylesheets for designing beautiful and responsive web layouts."
  },
  {
    frontName: "Bootstrap",
    iconf: <FaBootstrap className="iconz"  />,
    descriptionf: "A CSS framework for building responsive, mobile-first websites."
  },
   {
    frontName: "React",
    iconf: <FaReact className="iconz"  />,
    descriptionf: "A JavaScript library for building fast, interactive UIs."
  },
  {
    backName: "Spring Boot",
    iconb: <SiSpringboot className="iconz"/>,
    descriptionb: "Java-based framework for building production-ready applications."
  },
  {
    backName: "Node.js",
    iconb: <FaNodeJs className="iconz"  />,
    descriptionb: "JavaScript runtime for building fast and scalable server-side apps."
  },
  {
    backName: "Express.js",
    iconb: <SiExpress className="iconz" />,
    descriptionb: "Minimal and flexible Node.js framework for building APIs."
  },
  {
    dbName: "MongoDB",
    icondb: <SiMongodb className="iconz"  />,
    descriptiondb: "A NoSQL database for storing data in JSON-like documents."
  },
  {
    dbName: "MySQL",
    icondb: <SiMysql className="iconz"  />,
    descriptiondb: "A popular relational database for structured data."
  },
  {
    languages: "Java",
    iconl: <FaJava className="iconz"  />,
    descriptionl: "A high-level, class-based programming language."
  },
   {
    languages: "JavaScript",
    iconl: <SiJavascript className="iconz" />,
    descriptionl: "A versatile language for both frontend and backend development."
  },
  {
    versionControl: "Git",
    iconv: <FaGitAlt className="iconz"  />,
    descriptionv: "Version control system for tracking code changes."
  },
  {
    versionControl: "GitHub",
    iconv: <FaGithub className="iconz" />,
    descriptionv: "A platform for hosting and collaborating on Git repositories."
  }
];

const certificates=[
          { src: '/images/coursera5.JPG', text: 'Technical Support Fundamentals',description:"In this module of course offered by google ,I have learn about the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service.", certificateIcon: <SiCoursera className="courseraIcon"/>,courseIcon:<FcGoogle className="courseIcon"/>,courseLink:"https://coursera.org/verify/98C7JMUAJ2X4",courseraImage: "/images/coursera-icon-image.png",courseraAlt:"sidban-coursera-link"},
          { src: '/images/coursera2.JPG', text: 'Programming Foundations with JavaScript, HTML and CSS',description:"In this module of course offerd by Duke university,i have learn the foundational programming concepts and basic web development as you build web pages using HTML, CSS, JavaScript.", certificateIcon: <SiCoursera className="courseraIcon"/> ,courseIcon:<img className="courseIcon-university" src="/images/duke-university-logo.png" alt="duke-university"/>,courseLink:"https://coursera.org/verify/URX2QH4B8AKQ",courseraImage: "/images/coursera-icon-image.png" ,courseraAlt:"sidban-coursera-link"},
          { src: '/images/coursera3.JPG', text: 'Programming for Everybody (Getting Started with Python)',description:"In this module of course offered by University of Michigan,I have learn the basics of how one constructs a program from a series of simple instructions in Python.", certificateIcon: <SiCoursera className="courseraIcon"/> ,courseIcon:<img className="courseIcon-university" src="/images/michigan-university.png" alt="duke-university"/>,courseLink:"https://coursera.org/verify/PXN2PJ4VAVNR",courseraImage: "/images/coursera-icon-image.png",courseraAlt:"sidban-coursera-link"},
          { src: '/images/coursera4.JPG', text: 'Python Data Structures',description:"In this module of course offered by University of Michigan,I have learn how to use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.", certificateIcon: <SiCoursera className="courseraIcon"/>,courseIcon:<img className="courseIcon-university" src="/images/michigan-university.png" alt="michigan-university"/> ,courseLink:"https://coursera.org/verify/LTLPYZJNPQ6Z",courseraImage: "/images/coursera-icon-image.png",courseraAlt:"sidban-coursera-link"},
          { src: '/images/coursera1.JPG', text: 'The Bits and Bytes of Computer Networking',description:"In this module of course offered by google ,I have given the overview of computer networking and also learn the basics of TCP/IP and OSI networking models and how the network layers work together.", certificateIcon: <SiCoursera className="courseraIcon"/>,courseIcon:<FcGoogle className="courseIcon"/> ,courseLink:"https://coursera.org/verify/QZR53C7SGTXN",courseraImage: "/images/coursera-icon-image.png",courseraAlt:"sidban-coursera-link"},
          { src: '/images/Eauth.jpg', text: "Published Research Paper on E-Authentication using QR-Code and OTP",description:"Co-authored and published the paper 'E-Authentication System using QR-Code and OTP' with Varsha Bhole, Meghraj Mhatre, and Kalpesh Shete at the E-Conference on Artificial Intelligence and Machine Learning (EC-AI&ML 2021), part of IC-ICN Multicon-W 2022, held in November 2021, Mumbai, India.",courseraImage: "/images/acpco-logo2.png",courseraAlt:"acpce-link",courseLink:"https://www.acpce.org/academics/ug-programme/information-eng/publications/#:~:text=Varsha%20Bhole%2C%20Siddheshwar%20Bansode%2C%20Meghraj%20Mhatre%2C%20Kalpesh%20Shete%20E%2DAuthentication%20System%20using%20QR%2DCode%20and%20OTP.%20E%2DConference%20on%20Artificial%20Intelligence%20and%20Machine%20Learning%20(EC%2DAI%26ML%202021)%2C%20November%202021%2C%20Mumbai%2C%20India.",courseIcon:<img className="courseIcon-university" src="/images/icn-logo2.JPG" alt="icn-logo"/>}
]; 



    return (
        <SidbanContext.Provider value={{sidbio,acadamics,skills,certificates}}>
        {children}
        </SidbanContext.Provider>
    );
}

export default SidbanContext;