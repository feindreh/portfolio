import "./header.css"
import profile from "../img/profile-placeholder.jpeg"

function Header(){

      

    return(
        <div id="header">
            <div id="header-bg"></div>
            <div id="profileWrap">
                <img id="profile" src={profile}></img>
                <div id="name">Kaddle <br></br> Williams</div>
            </div>
        </div>
    )
}

export default Header



 