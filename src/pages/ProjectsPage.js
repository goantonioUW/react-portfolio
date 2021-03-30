import React from 'react';
import javaScriptIMG from '../images/javaScript_Quiz_pic.JPG';
import passwordGenerator from '../images/passwordGeneratorScreenshot.png';
import gameAndGif from "../images/gameAndGif.png";
import dailyPlanner from "../images/dailyPlannerScreenschot.png";
import fitnessTracker from "../images/fitnessTracker.png";
import weatherAPI from "../images/weather.png";
import readmeGen from "../images/readme.png";
import teamProfile from "../images/teamprofile.png";
import foodDadabase from "../images/foodDadabase.png";
import burgerApp from "../images/burger.png";
import employeeTracker from "../images/employeeTracker.gif";
import employeeDir from "../images/employeeDir.png";
import '../Css/PortfolioPage.css';


const ProjectsPage = () => {
    return (
      <div className="container" style={{width: "100vw", height: "100vh"}}>
        <div className="container-fluid d-flex">
                <div className="grid-container">
                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Javascript Quiz</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={javaScriptIMG} alt="javascript quiz app" />
                    <a href="https://goantoniouw.github.io/javascript-quiz/" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>

                    <a href="https://github.com/goantonioUW/javascript-quiz" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>

                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Password generator</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={passwordGenerator} alt="password generator screenshot" />
                    <a href="https://goantoniouw.github.io/password-generator/" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>
                    <a href="https://github.com/goantonioUW/password-generator" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>

                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Game and Gif</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={gameAndGif} alt="Game and Gif screenshot" />
                    <a href="https://tskading.github.io/Game-Meme/" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>
                    <a href="https://github.com/Tskading/Game-Meme" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>
                </div>
                <div className="grid-container">
                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Daily Planner</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={dailyPlanner} alt="Planner screenshot" />
                    <a href="https://goantoniouw.github.io/Daily-planner/" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>
                    <a href="https://github.com/goantonioUW/Daily-planner" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>

                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Fitness Tracker</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={fitnessTracker} alt="Fitness Tracker Login" />
                    <a href="https://my-workout-app1.herokuapp.com/?id=604e6b7e5da03181c46b526b" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>
                    <a href="https://github.com/goantonioUW/fitnessTracker" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>

                  <div className="grid-item" style={{width: "300px"}}>
                    <h3 className="imgText">Weather Dashboard</h3>
                    <img className="projectImg" style={{width:250,height:200}} src={weatherAPI} alt="Weather API" />
                    <a href="https://goantoniouw.github.io/weatherAPI/" target="_blank" rel="noreferrer">
                      <button className="myButton">Link to the live page</button> 
                    </a>
                    <a href="https://github.com/goantonioUW/weatherAPI/settings" target="_blank" rel="noreferrer">
                    <button className="myButton">Link to the GithubRepo</button>
                    </a>
                  </div>
                </div>

          <div className="grid-container">
            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">ReadMe Generator</h3>
              <img className="projectImg" style={{width:250,height:200}} src={readmeGen} alt="ReadMe Generator" />
              <a href="https://www.youtube.com/watch?v=4lI7Mf6ZDlM" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live demo</button> 
              </a>
              <a href="https://github.com/goantonioUW/ReadME" target="_blank" rel="noreferrer">
              <button className="myButton">Link to the GithubRepo</button>
              </a>
            </div>

            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">Team Template</h3>
              <img className="projectImg" style={{width:250,height:200}} src={teamProfile} alt="Team Generator" />
              <a href="https://www.youtube.com/watch?v=q4WK-Kp4Qz4" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live demo</button> 
              </a>
              <a href="https://github.com/goantonioUW/TeamTemplate" target="_blank" rel="noreferrer">
              </a>
              <button className="myButton">Link to the GithubRepo</button>
            </div>

            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">Food Data base</h3>
              <img className="projectImg" style={{width:250,height:200}} src={foodDadabase} alt="Food dad-a-base" />
              <a href="https://food-dad-a-base.herokuapp.com/login" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live page</button> 
              </a>
              <a href="https://github.com/goantonioUW/food-dadabase" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the GithubRepo</button>
              </a>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">Name a Burger</h3>
              <img className="projectImg" style={{width:250,height:200}} src={burgerApp} alt="Burger creator" />
              <a href="https://name-a-burger.herokuapp.com/" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live page</button> 
              </a>
              <a href="https://github.com/goantonioUW/burger" target="_blank" rel="noreferrer">
              <button className="myButton">Link to the GithubRepo</button>
              </a>
            </div>

            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">Employee Tracker</h3>
              <img className="projectImg" style={{width:250,height:200}} src={employeeTracker} alt="EMS" />
              <a href="../images/employeeTracker.gif" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live demo</button> 
              </a>
              <a href="https://github.com/goantonioUW/employeeTracker" target="_blank" rel="noreferrer">
              <button className="myButton">Link to the GithubRepo</button>
              </a>
            </div>

            <div className="grid-item" style={{width: "300px"}}>
              <h3 className="imgText">Employee Directory</h3>
              <img className="projectImg" style={{width:250,height:200}} src={employeeDir} alt="Employee dir" />
              <a href="https://employee-directory-team.herokuapp.com/" target="_blank" rel="noreferrer">
                <button className="myButton">Link to the live page</button> 
              </a>
              <a href="https://github.com/goantonioUW/employee-directory" target="_blank" rel="noreferrer">
              <button className="myButton">Link to the GithubRepo</button>
              </a>
            </div>
          </div>
    </div>
  </div>
    )
}

export default ProjectsPage