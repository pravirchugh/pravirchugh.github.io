import React from "react";
import './Experience.css';
function Experience({name, start, end, title, description, link}){
    /* Name of experience, start/end date, position in experience, description*/
    return (

        <div className="expContainer">

            <div className="heading">
                
                <h2 id="organizationName"><a href={link} className="websiteLink">{name}</a></h2>
                
                
                <div className="subtitles" id="supplementaryInfo">
                    <p className="subtitle"><i>{start} - {end}</i></p>
                    <p className="subtitle"><i>{title}</i></p>
                </div>
            </div>
            <p id={"desc"}>{description}</p>

        </div>


    )
}
export default Experience;