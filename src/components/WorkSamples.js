import React from "react";
import { Grid } from '@mui/material';
import PersonalWebsitePhoto from './pictures/PersonalWebsitePhoto.png';
import MathematicalToolsPhoto2 from './pictures/MathematicalToolsPhoto2.png';
import TodoListPhoto2 from './pictures/TodoListPhoto2.png'
import './WorkSamples.css'


const projectInfo=[
    // {name: "Personal Website", technologiesUsed: "HTML/CSS, JavaScript, React.js.", additionalInfo: "", image: {PersonalWebsitePhoto}},
    {name: "MathematicalTools", technologiesUsed: "HTML/CSS, JavaScript, TensorFlow.js.", additionalInfo: "", image: {MathematicalToolsPhoto2}},
    {name: "Todo List", technologiesUsed: "HTML/CSS, JavaScript.", additionalInfo: "", image: {TodoListPhoto2}}
];

function WorkSamples(){
    return (
        <div className="main_section">
          
            <h2 style={{textAlign: "center"}}>Work Samples</h2>

            <p style={{textAlign: "center"}}>Here are some projects that I've worked on!</p>
            <br></br>
  
            <Grid container spacing={3}>

        
                <Grid item xs={6}>
                    <div className="individualSample">
                        <h3 style={{textAlign: "center"}}>MathematicalTools</h3>
                        
                        <p style={{textAlign: "center", margin: "1% auto"}}>The tools you need for all-things statistics! Includes linear regression, five number summaries, and more. <i>{projectInfo[0].technologiesUsed}</i></p>
                        <br></br>
                        
                        <img src={MathematicalToolsPhoto2} className="work_sample_image" alt="MathematicalTools"/>
                        
                    </div>
                    
                </Grid>

                <Grid item xs={6}>
                    <div className="individualSample">
                        <h3 style={{textAlign: "center"}}>Todo List</h3>
                        
                        <p style={{textAlign: "center", margin: "1% auto"}}>Organization, made easy. Functionality includes adding/deleting todos. New features coming soon! <i>{projectInfo[1].technologiesUsed}</i></p>
                        <br></br>
                        
                        <img src={TodoListPhoto2} className="work_sample_image" alt="TodoList"/>
                        
                    </div>
                </Grid>
        

            </Grid>



        </div>
    )
}
export default WorkSamples;