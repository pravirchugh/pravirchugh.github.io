import React, { useEffect } from "react";
import Experience from "./Experience";

import {useState} from "react";
import InterestSection from './InterestSection.js'
import SoftwareDevelopmentIcon from './pictures/SoftwareDevelopmentIcon.png'
import ArtificialIntelligenceIcon from './pictures/ArtificialIntelligenceIcon.png'
import CybersecurityIcon from './pictures/CybersecurityIcon.png'

let expanded = false;
const experiences = [
    {name: "Stanford University Human-Centered AI", start: "June 2023", end: "September 2023", title: "Research Intern", description: "Worked with researchers and industry professionals from Stanford HAI and the Young Data Scientists League to analyze modern large language models for different types of bias.", link: "https://hai.stanford.edu/"},
    {name: "Nova for Good", start: "October 2022", end: "Present", title: "Software Developer", description: "Developer for Canopy, a platform that allows anyone, including under-resourced and distanced community members, to create their own online peer network.", link: "https://www.novaforgood.org/about"},
    {name: "ACM Hack", start: "September 2022", end: "Present", title: "Member", description: "Learned various topics in web development and applied my learnings to create this personal website.", link: "https://hack.uclaacm.com/"},
    /*{name: "ACM AI", start: "September 2022", end: "Present", title: "Member", description: "Studied different concepts in AI as well as their implementations in Python.", link: "https://uclaacmai.github.io/" }*/
]

function ExperienceList(){
    const [expanded, setExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("More on my interests in Computer Science.")

    function handleClick(){
      setExpanded(!expanded);

      if(buttonText === "More on my interests in Computer Science."){
        setButtonText("Hide interests.")
      } else {
        setButtonText("More on my interests in Computer Science.");
      }
    }

    return (
        <>
            <div>
                <h2>Experience</h2>

                <div style={{margin: 'auto', width: '60%'}}>
                    {experiences.map(

                        (experience) => { return <Experience name={experience.name} start={experience.start} end={experience.end} title={experience.title} description={experience.description} link={experience.link}></Experience>
                    })}
                </div>

            </div>



            <button style={{backgroundColor: "beige"}}
                onClick={() => handleClick()} id="interestsButton"
            >

            {buttonText}
            </button>

      
            { expanded && 

                <div id="interest_sections">

                    <InterestSection name={"Software Development"} link={SoftwareDevelopmentIcon} statement1={"Helping power and maintain large-scale interactions between people and the internet is very exciting to me."}></InterestSection>
                    <InterestSection name={"Artificial Intelligence"} link={ArtificialIntelligenceIcon} statement1={""} statement2={"I hope to learn and contribute to applications of AI, including recommender systems and classification methods, in a variety of industries."}></InterestSection>      
                    <InterestSection name={"Cybersecurity"} link={CybersecurityIcon} statement1={"I wish to ensure that our created software remains confidential, maintains its integrity, and is rightfully trusted."}></InterestSection>

                </div>

            }

        </>
    )

}
export default ExperienceList;