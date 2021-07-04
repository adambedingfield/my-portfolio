import React from "react";
// I used react router npm to help create nav links
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Imports other components for nav switching
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

// Nav export component
export default function Nav() {
  return (
    <Router>
      <div>
        <div className="header">
              <div className="container">
                <div className="row">
                  <h1 className="col name">Adam Bedingfield</h1>
                  <nav className>
                    <ul className="nav row">
                        {/* Links to targeted switch */}
                      <li>
                        <Link className="list-item" to="/about">About</Link>
                      </li>
                      <li>
                        <Link className="list-item" to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link className="list-item" to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link className="list-item" to="/resume">Resume</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. Then loads section */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}