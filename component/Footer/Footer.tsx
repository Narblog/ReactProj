import React from "react";
import "./Footer.css"
function Footer(){
    return(
        <div className="footer">
            <div className="box">
                <h3>LINKS</h3>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
                </div>
                <div className="box">
                    <h3>
                        NEWSLETTER
                    </h3>
                   
                        <input type="email" placeholder="Your Email"></input>
                        <button type="submit">SUBSCRIBE</button>
                 
                </div>
                <div className="box">
                    <h3>CONTACT</h3>
                    <p>6 Norterhn Avenue</p>
                    <p>+37499202020</p>
                </div>
        </div>
    )
}

export default Footer