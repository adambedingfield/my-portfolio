import React from 'react';

function About() {
    return (
        <div>
            <div className="row">
                <div className="col myphoto-container">
                <img className="myphoto" src={require("../../assets/me.jpeg").default}></img>
                </div>
                <div className="col about-text">
                    <h1>Bio</h1>
                    <p>My name is Adam Bedingfield, I am 23 year old from Los Angeles, California. I was born and raised in Los Angeles and find it a hard place to beat. I am open for the opportunity to live somewhere else but I do find the weather here hard to beat. Growing up I played a great deal of sports including soccer, lacrosse, basketball, and baseball. I played travel lacrosse from elementary school up through middle school before I switched to club and highschool soccer. Music has also played a significant role in my life. I grew up with a father who was an avid drummer and while I personally can't play any instruments I can appreciate the work put into them. I enjoy all genres of music but my main interest falls in the electronic music category. Since early high school, I've been attending as many concerts/festivals that I have been able to. Some of my other hobbies include video games and now coding. I've been playing video games since before I can remember and it was one of the main driving forces to checkout coding. </p>
                    <h2>Why I started coding</h2>
                    <p>As stated previously, video games were one of the reasons I decided to get into coding. While I don't necessarily have a set desire to become a game developer, I still see it as an option. I also spend most of my freetime when I'm home on the computer so I figured getting into coding would be a good use of this time. One of the main aspects I enjoy about coding is the problem solving that it takes. Problem solving has been a constant in my life from sports, school, video games etc. and I enjoy the ups and downs it takes to finding a solution.</p>
                </div>
            </div>
        </div>
    )
}

export default About;