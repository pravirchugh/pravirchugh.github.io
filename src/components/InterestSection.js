import './InterestSection.css'

function InterestSection(props){
    return (
        <div className='container'>
            <h2>{props.name}</h2>
            <div id="image_and_statement">
                <img src={props.link} alt="Interests"></img>

                <div id="statements">
                    <p>{props.statement1}</p>
                    <p>{props.statement2}</p>
                </div>
                
            </div>
        </div>
    )
} export default InterestSection;