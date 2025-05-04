import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import "./Resume.css"

export default function Resume() {
    return(
        <>
            <div>
                <div style={{display: 'flex'}}>
                    <div className="paragraph">
                        <h1>Resume</h1>
                        Game programmer specialized on <strong>Unity 3D</strong>, currently based in Barcelona, Spain.
                        After graduating from a <strong>Multiplatform Aplication Development vocational training programme</strong> in 2019
                        I have been working on my own projects as a solo game developer and participating in game jams.
                        <br />
                        <br />
                        Right now I'm searching a job as <strong>gameplay programmer</strong>.
                        <br />
                        <br />
                        Passionate about the creation of interactive experiences and immersive worlds. Working efficiently in multidisciplinary teams
                        and applying good programming practices aimed at scalability and performance.
                        <div style={{marginTop: '20px', marginBottom: '20px'}}>
                            <a className="download-link" href="documents/Resume-Aitor-Garcia-Miñana.pdf" target="_blank">
                                <FontAwesomeIcon icon={faDownload} style={{marginRight:'1em'}} />
                                Download as PDF
                            </a>
                        </div>
                    </div>
                    <div className="photo">
                        <img className="avatar" src="/Portfolio/img/photo2.png" alt="A photography of Aitor Garcia Miñana" />
                    </div>
                </div>
                <div style={{clear:"both"}}>
                </div>
                <div className="full-content">
                    <h2>Work Experience</h2>
                    <h3><strong>Software developer Internship</strong> &mdash; <strong>ViOD Games Studio, Barcelona</strong></h3>
                    <h4> April 2019 &mdash; July 2019</h4>
                    <ul>
                        <li>
                            Worked on the development of an infinite waves game mode for the <strong>VR</strong> video game StarGaze usign <strong>Object Pooling</strong>.
                        </li>
                        <li>
                            Implemented <strong>procedural generation system</strong> for the enemies waves, ensuring the <strong>scalability</strong> of the game and the dynamic experience.
                        </li>
                        <li>
                            <strong>Collaborated</strong> with the design team to balance the mechanics of the game and ensure that the wave mode was defiant and funny.
                        </li>
                        <li>
                            Used Unity 3D and C# as main tools in the development.
                        </li>
                    </ul>
                    <h2>Featured Projects</h2>
                    <h3><strong>Astaroth</strong> &mdash; Personal Project</h3>
                    <h4>October 2023 &mdash; November 2024</h4>
                    <ul>
                        <li>
                            Worked on a 2D platform with combat as personal project using Unity 3D and C#.
                        </li>
                        <li>
                            Implemented a <strong>custom gravity system</strong> to make the game feel more cartoony and improve the movement experience.
                        </li>
                        <li>
                            Programmed a basic <strong>AI</strong> for each enemy as it’s <strong>pathfinding</strong> and a more complex AI for the Boss Battle.
                        </li>
                        <li>
                            Implemented an <strong>abilities system</strong> and its interface.
                        </li>
                    </ul>
                    <h3><strong>A Game About Dragons</strong> &mdash; <strong>Sant Jordi Game Jam</strong></h3>
                    <h4>April 2024 &mdash; April 2024</h4>
                    <ul>
                        <li>
                            Worked as <strong>main programmer</strong> on a puzzle game in 2 weeks as part of a team of 5 developers.
                        </li>
                        <li>
                            The Project consists of a puzzle game based on “the dragons of every day” theme, assigned during the jam.
                        </li>
                        <li>
                            Worked on mechanics like drag and drop, the character movement, and a system of room based scenes to improve the performance of the game.
                        </li>
                        <li>
                            Worked with an agile and multidisciplinary team using <strong>Git</strong> for control versions and sharing work.
                        </li>
                    </ul>

                    <h2>Skills</h2>
                    <div className="skill-set">
                        <h3>Languages</h3>
                        <div className="skill">C#</div>
                        <div className="skill">C++</div>
                        <div className="skill">Javascript</div>
                    </div>
                    <div className="skill-set">
                        <h3>Gamedev</h3>
                        <div className="skill">Unity</div>
                        <div className="skill">Unreal Engine 5</div>
                        <div className="skill">SDL 2</div>
                        <div className="skill">OpenGL 4</div>
                    </div>
                    <div className="skill-set">
                        <h3>Tools & frameworks</h3>
                        <div className="skill">Visual Studio</div>
                        <div className="skill">Git</div>
                        <div className="skill">Jira</div>
                    </div>
                    <div style={{clear:'both'}}></div>
                    <h2>Education</h2>
                    <h3>Multiplatfomr Aplication Development vocational training programme</h3>
                    <h4>Escola Pia de Granollers | 2017 &mdash 2019</h4>
                    <h2>Languages</h2>
                    <h3>English</h3>
                    <h3>Spanish</h3>
                    <h3>Catalan</h3>
                </div>
            </div>
        </>
    )
}