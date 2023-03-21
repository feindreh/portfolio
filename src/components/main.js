import "./main.css"

import Project from "./project"
import projects from "../projects"

function Main(){



    return(
        <div id="main">
            <h1 id="work">My Work</h1>
            <div id="projects">
                {projects.map((project) => {
                    return <Project key = {project.name} project={project}/>
                })}
            </div>
        </div>
    )
}

export default Main