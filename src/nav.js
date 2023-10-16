import { Link } from "react-router-dom";
import './nav.css';
import { ImLocation } from 'react-icons/im'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";
import LoginButton from "./Login";


function Nav(){
  let {isAuthenticated} = useAuth0()
    return(


<div className="head">
          <img
            className="img"
            src="https://qahwablk.com/wp-content/uploads/2022/10/Qahwa-BLK.webp"
            alt="logo"
          ></img>
    
          <ul>
            <li>
            <a href="/">HOME</a>
            </li>
            <li>
              <Link to="/main">MENU</Link>
            </li>
            {/* <li >
              <a href="/">About</a>
            </li> */}
            <li>
              <a href="https://www.google.com/maps/search/blk/@31.9882766,35.851604,13z/data=!3m1!4b1?entry=ttu" className="map"><ImLocation/>FIND US</a>
            </li>
              {isAuthenticated? <LogoutButton className="log" />: <LoginButton  className="log"/>}       
          </ul>
          
        </div>      
    )
}

export default Nav ; 