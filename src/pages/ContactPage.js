import React from 'react';
import '../Css/ContactPageStyle.css';


const ContactPage = () => {
    return (
        <div className="contact d-flex text-center" style={{width: "100vw", height: "100vh"}}>

                <div className="card-group" style={{width: "30rem", height: "30rem"}}>
                    <div className="card">
                        <a href="tel:2066836781">
                            <p className="card-title">Cell Number: (206)683-6781</p>
                        </a>
                    </div>
                </div>
                
                <div className="card-group" style={{width: "30rem", height: "30rem"}}>
                    <div className="card">
                        <a href="mailto:goantonio31@outlook.com">
                            <p className="card-title">Email: GOANTONIO31@gmail.com</p>
                        </a>
                    </div>
                </div>
                
                <div className="card-group" style={{width: "30rem", height: "30rem"}}>
                    <div className="card">
                        <a href="https://github.com/goantonioUW">
                            <p className="card-title">Github Profile: Goantoniouw@github</p>
                        </a>
                    </div>
                </div>
                
                <div className="card-group" style={{width: "30rem", height: "30rem"}}>
                    <div className="card">
                        <a href="https://www.linkedin.com/in/antonio-gonzalez-34a0771b0/">
                            <p className="card-title">Linkedin Profile: Antonio-Gonzalez@Linkedin</p>
                        </a>
                    </div>
                </div>  
        </div>
    )
}

export default ContactPage