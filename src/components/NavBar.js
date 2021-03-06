import React from 'react';
import logo from "../logo.png";
//React fontawesome imports
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        className="logo"
                        src={logo}
                        alt="Yanet Logo..." />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon = {faBars} 
                    style = {{ color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio<span class="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
