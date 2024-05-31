import React from 'react'
import Logo from '../assets/logo.png';
import Name from '../assets/HumptyDumpty.jpg';
//import { Link } from 'react-router-dom';
//import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css';
import WelcomeGif from '../assets/cute-penguin.gif';

function Navbar() {
    return (
      <div className = "navbar">
        <div className="leftSide">
            <img src={Logo}/>
        </div>
        <img src={WelcomeGif} alt="Welcome GIF" className="welcome-gif" />
        <div className="rightSide">
            <img src={Name}/>
        </div>
      </div>
    )
  }

export default Navbar
