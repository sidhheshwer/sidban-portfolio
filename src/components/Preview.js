import React from 'react'
import "../stylesheets/preview.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdMovieFilter } from 'react-icons/md';
import { IoMdChatboxes } from 'react-icons/io';
import { SiAuthelia } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
 
export default function Preview({ openPreview, setPreview, selectedProject }) {
  const previewData = [

{
  projectName: "Sidban Movies",
  projectIcon: <MdMovieFilter className='project-icon' />,
  projectLink:"https://sidban-movies-2.onrender.com",
  images: [

    {
      image: "/images/movies1.jpeg",
      description: "Secure account creation interface with Google OAuth integration and modern authentication flow."
    },

    {
      image: "/images/movies2.jpeg",
      description: "Fast and responsive login system featuring Google OAuth and protected user authentication."
    },

    {
      image: "/images/movies3.jpeg",
      description: "Dynamic movie streaming homepage showcasing all marvel content and displaying the top rating scores."
    },

    {
      image: "/images/movies4.jpeg",
      description: "Interactive trailer experience designed for smooth preview playback and enhanced user engagement."
    },

    {
      image: "/images/movies5.jpeg",
      description: "High-performance movie streaming player powered by cloudinary video hosting for seamless playback."
    },

    {
      image: "/images/movies6.jpeg",
      description: "Personalized recommendation section helping users discover related movies and entertainment content."
    },

    {
      image: "/images/movies7.jpeg",
      description: "Real-time search functionality enabling quick access to movies, series, and featured content."
    },

    {
      image: "/images/movies8.jpeg",
      description: "Series streaming interface with season-based navigation for organized and user-friendly viewing."
    }

  ]
},

    
{
  projectName: "Sidban Chat",
  projectIcon: <IoMdChatboxes className='project-icon' />,
   projectLink:"https://sidban-chatapp.onrender.com",
  images: [

    {
      image: "/images/chat1.jpeg",
      description: "Modern and secure user registration interface designed for seamless account creation and accessibility."
    },

    {
      image: "/images/chat2.jpeg",
      description: "Authentication system with a clean login experience and secure user access management."
    },

    {
      image: "/images/chat3.jpeg",
      description: "Real-time contacts panel displaying active online users instantly through live socket connections."
    },

    {
      image: "/images/chat4.jpeg",
      description: "Interactive real-time messaging interface featuring instant communication powered by Socket.io technology."
    },

    {
      image: "/images/chat5.jpeg",
      description: "Live user chat experience with synchronized messaging and responsive real-time conversation updates."
    }

  ]
},


   

 {
  projectName: "Sidban Auth",
  projectIcon: <SiAuthelia className='project-icon' />,
   projectLink:"https://sidban-auth.onrender.com",
  images: [

    {
      image: "/images/auth2.jpeg",
      description: "Secure account registration interface integrated with Google OAuth authentication and JWT-based security."
    },

    {
      image: "/images/auth3.jpeg",
      description: "Modern login experience featuring Google OAuth integration with protected JWT authentication flow."
    },

    {
      image: "/images/auth4.jpeg",
      description: "Google OAuth authorization and redirection system ensuring secure third-party authentication handling."
    },

    {
      image: "/images/auth5.jpeg",
      description: "QR-based verification interface enabling users to receive OTP authentication codes through registered email."
    },

    {
      image: "/images/auth6.jpeg",
      description: "Two-factor authentication verification page for securely validating email-delivered OTP credentials."
    },

    {
      image: "/images/auth7.jpeg",
      description: "OTP validation error handling interface with secure resend OTP functionality for improved user experience."
    },

    {
      image: "/images/auth10.jpeg",
      description: "Automated SidbanAuth email delivery system showcasing secure OTP authentication communication."
    },

    {
      image: "/images/auth8.jpeg",
      description: "Protected home page access displayed after successful multi-step authentication and verification."
    },

    {
      image: "/images/auth9.jpeg",
      description: "Integrated services dashboard providing quick access to connected platforms such as Sidban Movies and Sidban Chat."
    },

    {
      image: "/images/auth1.jpeg",
      description: "Custom animated SidbanAuth loading screen designed for a smooth and modern authentication experience."
    }

  ]
},

  
{
  projectName: "SidbanAI",
  projectIcon: <GiBrain className='project-icon' />,
   projectLink:"https://sidbanai.onrender.com",
  images: [

    {
      image: "/images/ai1.jpeg",
      description: "Secure user registration interface integrated with Google OAuth authentication for seamless account access."
    },

    {
      image: "/images/ai2.jpeg",
      description: "Modern login system featuring Google OAuth integration with protected and responsive authentication flow."
    },

    {
      image: "/images/ai3.jpeg",
      description: "Interactive SidbanAI home interface featuring conversation onboarding, quick chat access, responsive navigation, and intelligent user input controls."
    },

    {
      image: "/images/ai4.jpeg",
      description: "Real-time AI conversation interface displaying live typing indicators and dynamic response generation for an engaging chat experience."
    },

    {
      image: "/images/ai5.jpeg",
      description: "AI-powered response generation system delivering detailed long-form conversational outputs using LLaMA language model integration."
    },

    {
      image: "/images/ai6.jpeg",
      description: "Robust Spring AI integration combined with Spring Security for secure and scalable AI request handling."
    },

    {
      image: "/images/ai7.jpeg",
      description: "Developer-focused coding assistant interface with formatted code generation and syntax rendering powered by React Markdown."
    },

    {
      image: "/images/ai8.jpeg",
      description: "Persistent conversation history system with MongoDB storage enabling users to resume previous AI interactions seamlessly."
    },

    {
      image: "/images/ai9.jpeg",
      description: "Conversation management feature allowing users to securely delete saved chat sessions from history."
    },

    {
      image: "/images/ai10.jpeg",
      description: "Responsive navigation panel displaying authenticated user details, chat history access, new conversation controls, and platform navigation."
    },

    {
      image: "/images/ai11.jpeg",
      description: "Comprehensive About page explaining SidbanAI architecture, technologies, security practices, platform features, and integrated project ecosystem."
    }

  ]
}

  ];
  const currentProject = previewData.find(
    (item) => item.projectName === selectedProject
  );

  

  return (


    openPreview ?

      <div className={!openPreview? 'previewDiv':'previewDiv-visible'}>
        <div className='previewHead'>
         <h3 className='previewH1'>
  {currentProject.projectName === "SidbanAI" ? (
    <>
      Sid<span className='banTextPreview'>ban</span>AI
    </>
  ) : (
    <>
      Sid<span className='banTextPreview'>ban </span>
      {currentProject.projectName.replace("Sidban ", "")}
    </>
  )}

  {currentProject.projectIcon}
 
</h3>
          <IoCloseOutline
            onClick={() => setPreview(false)}
            style={{ fontSize: '2rem', cursor: 'pointer' }}
          />
        </div>
      
        <div className='previewMain'>
  
          {currentProject?.images.map((item, i) => (
            
              <div className='previewCard' key={i}>
                <img
                  className="previewImages"
                  src={item.image}
                  alt="previewImages"
                />
                 <h4 className='previewDescription'>{item.description}</h4>
               
              </div>
            
          ))}
       
        </div>
        
      </div>
      :
      <>
      </>

  )
}
