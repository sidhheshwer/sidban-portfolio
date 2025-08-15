
import './App.css';
import { MdAdminPanelSettings } from "react-icons/md";
import Containers from './components/Containers';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SidbanContextProvider } from './Context/SidbanContext';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [colorChange,setColorChange]=useState(null);
  const[showMenu,setMenu]=useState(false);
  const nameRef=useRef(null);

  const sidbioRef=useRef(null);
  const acadamicRef=useRef(null);
   const technicalRef=useRef(null);
    const projectRef=useRef(null);
     const achiveRef=useRef(null);






  useEffect(()=>{
     const handleScroll = () => {
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const top = rect.top;
        if(top<-130){
          setIsVisible(true);
        }
        else{
            
          setIsVisible(false)
        }
      }
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  function handleOnMenu(){
     if(!showMenu){
      setMenu(true);
     }
     else{
      setMenu(false);
     }
  }


function handleOnScrollView(ref,index) {
    setColorChange(index)
  if (ref && ref.current ) {
     
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
 
  


 
}
    
  return (
    <>
      <GiHamburgerMenu className='hemburger' onClick={()=>{handleOnMenu()}}/>
     <header className= {isVisible ?'sidban-header':"sidban-header-visible"}  >
     <h1><span className='white-text'>Sid</span><span className='red-text'>ban</span> <MdAdminPanelSettings className='sidban-icon'/></h1>
       
      </header>
    <div className="main-container" ref={nameRef}>
      
      <SidbanContextProvider>
  <div className={showMenu?'menu-contents':'menu-contents-visible'}>
    <ul className='menu-div'> 
    <li className={colorChange===1?'menu-items-green':'menu-items'}onClick={()=>{handleOnScrollView(sidbioRef,1)}}>Introduction</li>
     <li className={colorChange===2?'menu-items-green':'menu-items'} onClick={()=>{handleOnScrollView(acadamicRef,2)}}>Acadamics</li>
      <li className={colorChange===3?'menu-items-green':'menu-items'}onClick={()=>{handleOnScrollView(technicalRef,3)}}>Technical</li>
       <li className={colorChange===4?'menu-items-green':'menu-items'} onClick={()=>{handleOnScrollView(projectRef,4)}}>Developments</li>
        <li className={colorChange===5?'menu-items-green':'menu-items'}onClick={()=>{handleOnScrollView(achiveRef,5)}} >Achivements</li>
        </ul>
     </div>
       <Containers projectRef={projectRef} sidbioRef={sidbioRef} technicalRef={technicalRef} acadamicRef={acadamicRef} achiveRef={achiveRef}/>
       
       </SidbanContextProvider>
    </div>
    <Footer/>
    </>
  );
}

export default App;
