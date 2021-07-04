import React from 'react';
// import github and repo icons for footer links using fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ghIcon = <FontAwesomeIcon icon={faGithub} />
const repoIcon = <FontAwesomeIcon icon={faCode} />

// export Footer function
export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer-link" href="https://github.com/adambedingfield">{ghIcon}</a>
            <a className="footer-link" href="https://github.com/adambedingfield/my-portfolio">{repoIcon}</a>
        </footer>
    )
}