import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const ghIcon = <FontAwesomeIcon icon={faGithub} />
const repoIcon = <FontAwesomeIcon icon={faCode} />

export default function() {
    return (
        <footer className="footer">
            <a className="footer-link" href="https://github.com/adambedingfield">{ghIcon}</a>
            <a className="footer-link" href="https://github.com/adambedingfield/my-portfolio">{repoIcon}</a>
        </footer>
    )
}