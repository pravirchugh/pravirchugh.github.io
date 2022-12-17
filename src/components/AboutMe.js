import React, {useState} from "react";
import PortraitPhoto from "./pictures/PortraitPhoto.jpeg"

function AboutMe(){
    
    

    return (

        <>
          <div id="intro">

            <h1>Pravir Chugh</h1>

            <img src={PortraitPhoto} id="portrait" alt="portrait"></img>   
            
            <p style={{fontSize: "25px"}}>Hello, my name is Pravir Chugh and I am a first-year CS major at UCLA!</p>

            <p style={{textAlign: 'left'}}>I am very passionate about the applications of computer science in both large-scale technologies and in helping our local communities. My interests in the field include software development, artificial intelligence, and cybersecurity. I am currently learning C++ and React. For more about me, you can refer to my <a href="https://www.linkedin.com/in/pravir-chugh-a8b8661b9/" className="profile_links" target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/pravirchugh" className="profile_links" target="_blank" rel="noreferrer">GitHub</a>.</p>
          </div>
        </>



    )
}
export default AboutMe;