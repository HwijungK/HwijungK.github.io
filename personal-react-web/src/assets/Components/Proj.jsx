import "./Proj.css"
function Project({title, description, link, imgSource}) {
    
    return(
        <a href={link} target="_blank">
            <div className="container">
            <div className="image-container">
                <img src={imgSource} alt={"img of " + {name}}></img>   
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </a>
        
    )
}

export default Project;