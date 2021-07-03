import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';

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
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <About />
          </Route>
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
        </Switch>
      </div>
    </Router>
  );
}