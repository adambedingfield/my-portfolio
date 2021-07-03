import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                <h1 className="col name">Adam Bedingfield</h1>
                <Nav></Nav>
                </div>
            </div>
        </header>
    )
}

export default Header;