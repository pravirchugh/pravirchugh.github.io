import React from "react";
import ResumePDF from './ResumeUpdated.pdf';

function Resume(){
    return (
        <>

        <h2 style={{textAlign: "center"}}>Resume</h2>
        
        <embed src={ResumePDF} width="60%" height="700" type="application/pdf" style={{marginLeft: "20%", borderRadius: "10px"}}></embed>
        
        
        
        </>
    )

}
export default Resume;