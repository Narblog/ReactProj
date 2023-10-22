import React from "react";
import "./card.css"


type Props={
    name:string;
    text:string;
    id:number;
    image:string;
}
export const Card=()=>{
    return(
        <div className="card">
            <div className="imag">

            </div>
            <h2>Name:</h2>
            <p> been the industry's standard dummy text ever 
         since the 1500s, when an unknown printer took  </p>
        </div>
    )
}
