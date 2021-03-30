import React from 'react';
import profilePic from '../images/profilePic.png';
import '../Css/About.css';

const AboutMePage = () => {
    return (
        <div style={{height: "100vh"}}>
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={profilePic} class="card-img-top" alt="ProfilePic" />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title text-center">A little about me!</h3>
                    <p class="card-text">My name is Antonio Gonzalez I am currently taking a full stack development class at UW. My goal is to become a web developer and use the skills that I learn to build and maintain websites. I was born and raised in Seattle. Growing up I took a programing class in the 8th grade and really enjoyed it. My high school did not offer any classes that related to programing or web development so, I did not get any further experience with it.
                                I graduated from high school and went on to play basketball at Bellevue college. During my time there I thought about getting into computer science but felt like I was already too far behind and was very discouraged. After college I became one of the managers at Nordstrom for women’s designer shoes. This was fun and I enjoyed managing a team then came COVID. This dramatically changed retail and my position. During Quarantine I had been looking at different jobs but wanted something with more stability. Then I came across the UW full stack course. I figured this is the perfect time for a career change. This is my second project and I want to keep learning more skills so that I can do this fulltime.</p>
                </div>
                </div>
            </div>
            </div>
        </div>    
    )
}

export default AboutMePage