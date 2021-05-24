import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons"

export default function SocialMedia() {
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/casaundra-salgado-385335113/" target="_blank" Visit="https://www.linkedin.com/in/casaundra-salgado-385335113/"  className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
            <a href="https://github.com/CaSaundra-Salgado" target="_blank" Visit="https://github.com/CaSaundra-Salgado" className="github social">
            <FontAwesomeIcon icon={faGithub} size="1x"/>
        </a>
        </div>
    )
}