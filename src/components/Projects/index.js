import React from 'react';

// Project component function
export default function Projects() {
    return (
        <div>
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://xavy-romeo.github.io/project-1-ucla/">
                    <img className="projectPhoto col" src={require("../../assets/cinfo.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">Cinfo<h4 className="project-description">A city search to keep you in the loop</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container">
                    <a href="https://polar-stream-25812.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/techblog.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">The Tech Blog<h4 className="project-description">A blog for tech</h4></h2>
                    </div>
                    </a>
                </div>
            </div>
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://stormy-tundra-78046.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/budgettracker.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">Budget Tracker<h4 className="project-description">Track your finances</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container">
                    <a href="https://safe-mesa-20030.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/notetaker.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">Notetaker<h4 className="project-description">A handy notetaker</h4></h2>
                    </div>
                    </a>
                </div>
            </div>
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://shoe-views-2.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/shoeview.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">Shoeview<h4 className="project-description">A blog for sneakers/shoes</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container">
                    <a href="https://adambedingfield.github.io/weather-dashboard/">
                    <img className="projectPhoto col" src={require("../../assets/weather.png").default}></img>
                    <div class="project-text-container">
                       <h2 className="project-text">Weather Dashboard<h4 className="project-description">A daily forecast</h4></h2>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}