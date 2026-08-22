import React from 'react'
import "../stylesheets/preview.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdMovieFilter } from 'react-icons/md';
import { IoMdChatboxes } from 'react-icons/io';
import { SiAuthelia } from 'react-icons/si';
import { GiBrain, GiFilmSpool } from 'react-icons/gi';
import { IoNewspaper } from "react-icons/io5";
export default function Preview({ openPreview, setPreview, selectedProject }) {
  const previewData = [

    {
      projectName: "Sidban Movies",
      projectIcon: <MdMovieFilter className='project-icon' />,
      projectLink: "https://sidban-movies-2.onrender.com",
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

      ],
      videos:[
        {
          video:"https://player.cloudinary.com/embed/?cloud_name=dxaidbhw8&public_id=SidbanMovies_rkbzby"
        }
      ]
    },


    {
      projectName: "Sidban Chat",
      projectIcon: <IoMdChatboxes className='project-icon' />,
      projectLink: "https://sidban-chatapp.onrender.com",
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

      ],
      videos:[
        {
          video:"https://player.cloudinary.com/embed/?cloud_name=dxaidbhw8&public_id=SidbanChat_q0agbw"
        }
      ]
    },




    {
      projectName: "Sidban Auth",
      projectIcon: <SiAuthelia className='project-icon' />,
      projectLink: "https://sidban-auth.onrender.com",
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
      projectLink: "https://sidbanai.onrender.com",
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

      ],
      videos:[
        {
          video:"https://player.cloudinary.com/embed/?cloud_name=dxaidbhw8&public_id=SidbanAI_wf7wya"
        }
      ]
    },
    {
      projectName: "Sidban News",
      projectIcon: <IoNewspaper className='project-icon' />,
      projectLink: "https://sidbannews.onrender.com",

      images: [

        {
          image: "/images/news1.jpeg",
          description: "Modern landing page interface showcasing real-time categorized news with a clean and responsive user experience."
        },

        {
          image: "/images/news2.jpeg",
          description: "Integrated SidbanAI-powered news analysis interface generating structured responses with News Title, News Overview, and Key Highlights sections.."
        },

        {
          image: "/images/news3.jpeg",
          description: "SidbanAI uses react markdown to show image of current news,summarizes from direct source references and links for a complete and informative reading experience."
        },

        {
          image: "/images/news4.jpeg",
          description: "Informative About SidbanAI section showcasing the platform’s intelligent assistant capabilities, and direct access to the Sidban portfolio."
        },
        {
          image: "/images/news15.jpeg",
          description: "Responsive navigation bar featuring organized access to all news categories for seamless platform exploration."
        },

        {
          image: "/images/news5.jpeg",
          description: "Trending news dashboard displaying real-time headlines with publication date, source name and source url,integrated with SidbanAI."
        },
        {
          image: "/images/news6.jpeg",
          description: "Tech news section delivering real-time coverage of software, smartphones, cybersecurity, startups, and emerging innovations with publication dates, trusted source links."
        },

        {
          image: "/images/news7.jpeg",
          description: "Entertainment news section featuring real-time updates on movies, streaming platforms, celebrities, music, gaming, and global entertainment."
        },

        {
          image: "/images/news8.jpeg",
          description: "Business news section delivering real-time coverage of stock markets, startups, finance, global economy, companies, and investment trends with trusted source details."
        },

        {
          image: "/images/news9.jpeg",
          description: "Politics news section providing real-time coverage of government policies, elections, international relations, political developments, and global affairs."
        },

        {
          image: "/images/news10.jpeg",
          description: "Sports news section delivering real-time updates on cricket, football, basketball, tournaments, player performances, and global sporting events."
        },
        {
          image: "/images/news11.jpeg",
          description: "Science news section featuring real-time updates on space exploration, scientific discoveries, environmental studies, and emerging innovations."
        },
        {
          image: "/images/news12.jpeg",
          description: "World news section providing real-time coverage of international events, global conflicts, diplomacy, economic developments, environmental issues."
        },

        {
          image: "/images/news13.jpeg",
          description: "Health news section delivering real-time coverage on medical research, healthcare advancements, wellness, nutrition, diseases, fitness, and global health developments."
        },
        {
          image: "/images/news14.jpeg",
          description: "About page showcasing SidbanNews architecture,Integrated SidbanAI intelligence, real-time news refresh system, platform technologies and creator information."
        }

      ],
      videos:[
        {
          video:"https://player.cloudinary.com/embed/?cloud_name=dxaidbhw8&public_id=SidbanNews_kxuaej"
        }
      ]
    }
    ,
    {
  projectName: "Sidban Cinema",
  projectIcon: <GiFilmSpool className='project-icon' />,
  projectLink: "https://sidbancinema.onrender.com",

  images: [
    {
      image: "/images/sidban-mob-sign.jpeg",
      description: "Modern user registration page featuring a clean interface for creating a new Sidban Cinema account with secure authentication."
    },

    {
      image: "/images/sidban-mob-login.jpeg",
      description: "Secure login screen allowing users to authenticate and access personalized movie and TV series content."
    },

    {
      image: "/images/sidban-mob-alert.jpeg",
      description: "Custom alert dialog providing informative feedback for authentication, validation, or application status messages."
    },

    {
      image: "/images/sidban-mob-home.jpeg",
      description: "Home page showcasing featured movies, trending titles, and categorized entertainment content with a responsive user interface."
    },

    {
      image: "/images/sidban-mob-navbar.jpeg",
      description: "Navigation menu featuring the user's profile pic and username, along with quick access to Watch History and Logout.It has dedicated buttons for Trending, Movies, TV Series, Top IMDb, and About Sidban Cinema."
    },

    {
      image: "/images/sidban-mob-categories.jpeg",
      description: "Movie categories section organizing content into genres for easy browsing and content discovery."
    },

    {
      image: "/images/sidban-mob-category-page.jpeg",
      description: "Category page displaying a collection of movies filtered by genre with posters and quick navigation."
    },

    {
      image: "/images/sidban-mob-search.jpeg",
      description: "Powerful search interface allowing users to quickly find movies and TV series by title."
    },

    {
      image: "/images/sidban-mob-sidbanAITyping.jpeg",
      description: "SidbanAI retrieves movie information from the OMDb API and transforms it into clear, structured, and user-friendly responses for an enhanced viewing experience."
    },

    {
      image: "/images/sidban-mob-airesponse.jpeg",
      description: "SidbanAI response interface presenting structured movie insights, recommendations, and detailed information."
    },

    {
      image: "/images/sidban-mob-moviedetails.jpeg",
      description: "SidbanAI generates a comprehensive movie information page featuring the synopsis, release date, ratings, genres, key details, and personalized recommendations explaining why the movie is worth watching."
    },

    {
      image: "/images/sidban-mob-aboutSidbanAI.jpeg",
      description: "About SidbanAI section introducing the AI assistant, its capabilities, the creator's information, and a direct link to the creator's portfolio for additional projects and contact details."
    },

    {
      image: "/images/sidban-mob-movies.jpeg",
      description: "Movies section showcasing a collection of films with an organized, responsive browsing experience and automatic content loading for seamless exploration."
    },

    {
      image: "/images/sidban-mob-series.jpeg",
      description: "TV series section featuring popular shows with organized browsing and seamless content exploration."
    },

    {
      image: "/images/sidban-mob-top.jpeg",
      description: "Top-rated IMDB content page highlighting the highest-rated movies and TV series available on the platform."
    },

    {
      image: "/images/sidban-mob-history.jpeg",
      description: "Watch History page enabling users to revisit previously viewed movies and TV series, with options to delete history entries for a personalized experience."
    },

    {
      image: "/images/sidban-mob-overview.jpeg",
      description: "Movie overview section presenting a comprehensive summary, storyline, genres, and essential details."
    },

    {
      image: "/images/sidban-mob-cast.jpeg",
      description: "Cast page displaying actors, actresses, and key crew members involved in the selected movie or TV series."
    },

    {
      image: "/images/sidban-mob-player.jpeg",
      description: "Sidban Player is an embedded third-party video player enabling reliable video streaming with responsive playback controls for a seamless viewing experience."
    },

    {
      image: "/images/sidban-mob-thirdparty.jpeg",
      description: "Sidban Player uses third-party streaming sources section providing integrated alternative viewing links, allowing users to access movies and TV series from multiple streaming providers."
    },

    {
      image: "/images/sidban-mob-episodes.jpeg",
      description: "Episodes page listing seasons and episodes for TV series with intuitive navigation and playback access."
    },

    {
      image: "/images/sidban-mob-loader.jpeg",
      description: "SidbanCinema loader screen enhancing user experience while movies, series, or application data are being fetched."
    },

    {
      image: "/images/sidban-mob-error.jpeg",
      description: "Custom error page informing users that the requested content is currently unavailable on Sidban Cinema, with a clear and user-friendly interface."
    },

    {
      image: "/images/sidban-mob-about.jpeg",
      description: "Sidban Cinema About page introducing the platform, its architecture, core technologies, streaming features, developer information."
    }
  ],
      videos:[
        {
          video:"https://player.cloudinary.com/embed/?cloud_name=dxaidbhw8&public_id=SidbanCinema_obrljb"
        }
      ]
}

  ];
  const currentProject = previewData.find(
    (item) => item.projectName === selectedProject
  );



  return (


    openPreview ?

      <div className={!openPreview ? 'previewDiv' : 'previewDiv-visible'}>
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

  {currentProject?.videos?.map((item, i) => (
  <div className="previewCard previewVideoCard" key={i}>
  <iframe
  className="previewVideo"
  src={item.video}
  title="Sidban News Demo"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

  </div>
))}
          

        </div>
       

      </div>
      :
      <>
      </>

  )
}
