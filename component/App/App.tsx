import React from "react";
import  ReactDOM  from "react";
import Logo from "../Logo";
import "./app.css"
import Navbar from "../Navbar";
import Contact from "../Contact";
import Header from "../Header";
import Download from "../Download";
import Images from "../Images";

function App(){
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
        
 

    </div>
)
}

export default App

