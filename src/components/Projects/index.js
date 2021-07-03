import React from 'react';

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="row myproject-container">
                <div className="col">
                    <a href="https://xavy-romeo.github.io/project-1-ucla/">
                    <img className="projectPhoto col" src={require("../../assets/cinfo.png").default}></img>
                    </a>
                </div>
                <div className="col">
                    <a href="https://polar-stream-25812.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/techblog.png").default}></img>
                    </a>
                </div>
            </div>
            <div className="row myproject-container">
                <div className="col">
                    <a href="https://stormy-tundra-78046.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/budgettracker.png").default}></img>
                    </a>
                </div>
                <div className="col">
                    <a href="https://safe-mesa-20030.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/notetaker.png").default}></img>
                    </a>
                </div>
            </div>
            <div className="row myproject-container">
                <div className="col">
                    <a href="https://shoe-views-2.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/shoeview.png").default}></img>
                    </a>
                </div>
                <div className="col">
                    <a href="https://adambedingfield.github.io/weather-dashboard/">
                    <img className="projectPhoto col" src={require("../../assets/weather.png").default}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}