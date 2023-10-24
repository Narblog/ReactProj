import React from "react";
import  ReactDOM  from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Header from "../Header";
import Download from "../Download";
import Images from "../Images";
import Card from "../Card";
import Footer from "../Footer";
import "./app.css"

function App(){
    interface PersonProps{
        id:number;
        Name:string;
        text:string;
        imageURL:string;


    }
    const person:PersonProps[]=[
        {
            id:1,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://img.freepik.com/premium-photo/boy-using-futuristic-computer_135749-58.jpg",
        },
        {
            id:2,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://media.istockphoto.com/id/546763388/fr/photo/le-point-de-vue-parfait.jpg?s=170667a&w=0&k=20&c=rG9LPeWfLJrAuafjVlL7WfAXMkEjoQshFgrxzA9ypE8="
        },
        {
            id:3,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        },
        {
            id:4,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:5,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://media.istockphoto.com/id/546763388/fr/photo/le-point-de-vue-parfait.jpg?s=170667a&w=0&k=20&c=rG9LPeWfLJrAuafjVlL7WfAXMkEjoQshFgrxzA9ypE8="
        },
        {
            id:6,
            Name:"Italian (Sicily)",
            text:"Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.",
            imageURL:"https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
        }
    ]

    
return(
    <div className="app">
        <nav> 
             <Logo/>
               <Navbar/>
             <Contact/>
         </nav>
         <div className="HeadImag">
            <div>
            <Header/>
            <Download/>
            </div>
            <Images/>
         </div>
   
    <div className="Personbox">
           {
           person.map((n: PersonProps)=>{
            return(
             
                <Card data={n}/>
            )
          })}
        </div>
    <Footer/>
    </div>
)
}

export default App

