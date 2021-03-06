/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/logo.png';
import '../Css/Nav.css'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
                <h1>Antonio Gonzalez</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/AboutMe">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
