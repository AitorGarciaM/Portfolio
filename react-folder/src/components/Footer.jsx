import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBluesky } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faItchIo } from "@fortawesome/free-brands-svg-icons"

import "./Footer.css"

export default function Footer() {
    return(
        <footer className="footer">
            <section className="footer-content">
                <p>&copy; {new Date().getFullYear()} My Portfolio</p>
                <p>You can reach me at:</p>
                <div className="social-links">
                    <a href="https://bsky.app/profile/aitordev.bsky.social">
                        <FontAwesomeIcon icon={faBluesky} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/aitor-garcia-mi%C3%B1ana/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                    </a>
                    <a href="https://aitor-garcia.itch.io/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faItchIo} size="xl"/>
                    </a>
                    <a href="https://github.com/AitorGarciaM" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </a>                    
                    <a href="mailto:aitor.garciamin@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                </div>
            </section>
        </footer>
    )
}