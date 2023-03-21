import Icon from '@mdi/react';
import { mdiGithub,mdiExport } from '@mdi/js';


function Project(props){
    console.log(props)
    const {name,image,text,ghLink,liveLink}= props.project

    console.log(name)
    return(
        <div className="project">
            <div className = "projectWrap">
                <img className ="screenshot" src={image} alt="Screenshot"></img>
            </div>
            <div className ="projectInfo">
                <div class="projectNameWrap">
                    <div className = "projectName">{name}</div>
                    <div className="iconWrap">
                        <a href={ghLink}>
                            <Icon path={mdiGithub} size={1} />
                        </a>
                        <a href={liveLink}>
                            <Icon path={mdiExport} size={1} />
                        </a>
                    </div>
                </div>
                <div className = "projectText">{text}</div>
            </div>
        </div>
    )
}

export default Project