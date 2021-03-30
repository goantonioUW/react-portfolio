/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typed from 'react-typed';
import '../Css/Header.css';

const Header = () => {
    return (

        <div className="header-wrapper">
            <div className="main-info">
                <h1>Full-Stack Web Developer</h1>
                <Typed 
                    className="typed-text"
                    strings={[
                    "Welcome To My Profile!",
                    "Web Design",
                    "Web Development",
                    "UX/UI Design"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />

            </div>
        </div>

    )
}

export default Header
