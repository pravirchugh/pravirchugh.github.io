import './App.css'; 
import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import ExperienceList from './components/ExperienceList';
import AboutMe from './components/AboutMe.js';
import Resume from './components/Resume.js';
import WorkSamples from './components/WorkSamples.js'
// npm install react-router-dom for the below: (navigation)
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom"
function App() {
  
  const colors = {
    about: "beige",
    garden: "burlywood",
    experience: "bisque",
    resume: "aqua",
    worksamples: 'teal'
}

  const location = useLocation(); // location now holds the current location of the user (on our website)
  const [navColor, setNavColor] = useState(colors.about);

  return (
    <div>
      <Helmet>
        <title>Pravir Chugh</title>
      </Helmet>

      <div id="entire">
        
        <div className='headerTitle' style={{backgroundColor: navColor}}>
          <Link to="/">About Me</Link> {"  |  "}
          <Link to="/experience">Experience</Link> {"  |  "}
          <Link to="/resume">Resume</Link> {"  |  "}
          <Link to="/worksamples">Work Samples</Link>
          <hr style= {{height: "0.1%", backgroundColor: "black", borderColor: "black"}} />
          
        </div>

        {/* Potential Routes listed here: */}
        <Routes> {/* Think of Routes as a table of contents, on the mainpage! */}
          <Route path="/" element={<AboutMe></AboutMe>}></Route>
          <Route path="/experience" element={<ExperienceList></ExperienceList>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/worksamples" element={<WorkSamples></WorkSamples>}></Route>
        
        </Routes>
          
      </div>

    </div>
    
  );
}
export default App;

