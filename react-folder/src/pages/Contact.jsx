import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBluesky } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faItchIo } from "@fortawesome/free-brands-svg-icons"

import styles from './Contact.module.css'

export default function Contact() {
    return(
        <div>
            <h1>Let's get in touch</h1>
            <div style={{marginBottom:'40px'}}>
                Feel free to contact me about any opportunity.
            </div>
            <ul className={styles.contact}>
                <li className={styles.contact}>
                    <FontAwesomeIcon icon={faBluesky} size='lg' />
                </li>
                <li className={styles.contact}>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                    <a href="https://www.linkedin.com/in/aitor-garcia-mi%C3%B1ana/">linkedin.com/in/aitor-garcia-mi%C3%B1ana/</a>
                </li>
                <li className={styles.contact}>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    <a href="mailto:aitor.garciamin@gmail.com">aitor.garciamin@gmail.com</a>
                </li>
                <li className={styles.contact}>
                    <FontAwesomeIcon icon={faItchIo} size='lg' />
                    <a href="https://aitor-garcia.itch.io/">aitor-garcia.itch.io/</a>
                </li>
                <li className={styles.contact}>
                    <FontAwesomeIcon icon={faGithub} size='lg' />
                    <a href="https://github.com/AitorGarciaM/">https://github.com/AitorGarciaM/</a>
                </li>
            </ul>
        </div>
    )
}