import React from "react";
import "./card.css"


type Props={
    name:string;
    text:string;
    id:number;
    image:string;
}
export const Card=({name,text,string,id})=>{
    return(
        <div className="card">
            <div className="imag">

            </div>
            <h2>Name:{name}</h2>
            <p> been the industry's standard dummy text ever 
         since the 1500s, when an unknown printer took  </p>
        </div>
    )
}
