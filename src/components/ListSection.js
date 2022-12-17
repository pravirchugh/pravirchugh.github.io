import './ListSection.css'

function ListSection(props){
    return (

        <div class="list_section">
            <p>{props.description}</p>

            <ul>
                <li><a href={props.link1}>{props.title1}</a></li>
                <li><a href={props.link2}>{props.title2}</a></li>
                <li><a href={props.link3}>{props.title3}</a></li>
            </ul>
      </div>


    )
} export default ListSection;