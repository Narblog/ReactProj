import React from "react";
import "./card.css"


interface PersonProps{
    id:number;
    Name:string;
    text:string;
    imageURL:string


}
type PrivateProps = {
    data: PersonProps
  }
  const Card: React.FC<PrivateProps> = ({data}) =>{
    return(
        <div className="card">
            
        <img src={data.imageURL} alt="text" />
            
            <h2>{data.Name}</h2>
            <p>{data.text}  </p>
        </div>
    )
}
export default Card
