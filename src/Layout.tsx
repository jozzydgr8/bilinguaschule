import { Outlet } from "react-router-dom"
import { Navbar } from "./shared/Navbar"
import { useEffect } from "react";
import { handleRequest } from "./shared/handleRequest";
import { FlatButton } from "./shared/FlatButton";

export const Layout = ()=>{
     useEffect(()=>{
    const animation = ()=>{
      var leftAnimate = document.querySelectorAll('.animate-left');
      var rightAnimate = document.querySelectorAll('.animate-right');
      var downAnimate = document.querySelectorAll('.animate-down');
      var upAnimate = document.querySelectorAll('.animate-up');

      var windowHeight = window.innerHeight;
      rightAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      leftAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationLeft')
        }

      })
      upAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationUp')
        }

      })
      downAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationDown')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[]);
    return(
        <>
        <Navbar/>
        <Outlet/>
       <FlatButton
          className="whatsappIcon borderlessbtn"
          onClick={() =>
            handleRequest(
              "Hi BilinguaSchule! 👋 I’m interested in learning German with you. I’d love to know more about your classes and how I can get started. 🇩🇪"
            )
          }
        >
          <>
          <span className="chatText">Chat us now</span>

          <img
            src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png"
            alt="Chat with BilingualChule"
          />
          </>
        </FlatButton>


        </>
    )
}