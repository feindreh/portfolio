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
            <div id="profile-text">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> 
        </div>
    )
}

export default Header



 