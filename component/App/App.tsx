import React from "react";
import  ReactDOM  from "react";
import Logo from "../Logo";
import "./app.css"
import Navbar from "../Navbar";
import Contact from "../Contact";
import Header from "../Header";
import Download from "../Download";
import Images from "../Images";
import Card from "../Card";
import Footer from "../Footer";

function App(){
    const person=[
        {
            id:1,
            Name:"John",
            text:"Hello JOhn",
            image:""
        },
        {
            id:2,
            Name:"John",
            text:"Hello JOhn",
            image:""
        },
        {
            id:3,
            Name:"John",
            text:"Hello JOhn",
            image:""
        },
        {
            id:4,
            Name:"John",
            text:"Hello JOhn",
            image:""
        },
        {
            id:5,
            Name:"John",
            text:"Hello JOhn",
            image:""
        },
        {
            id:6,
            Name:"John",
            text:"Hello JOhn",
            image:""
        }
    ]

    
return(
    <div className="App">
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
    <Card  person={person}/>
    <Footer/>
    </div>
)
}

export default App

