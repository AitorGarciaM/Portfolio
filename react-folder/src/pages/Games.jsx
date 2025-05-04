import { useState } from "react"

import Project from "../components/Project"
import ProjectModal from "../components/ProjectModal"

import { faWindows, faAndroid, faUnity, faItchIo, faGithub } from "@fortawesome/free-brands-svg-icons"
import styles from './Games.module.css'

import projectData from '../data/projects.json'

const iconMap = {
    windows: faWindows,
    android: faAndroid,
    unity: faUnity,
    itchio: faItchIo,
    github: faGithub,
    unreal: "/img/unreal.svg"
}

const transformedProjectIcons = (projectArray) => projectArray.map(project => 
    ({
        ...project,
        platformIcons: project.platformIcons.map(icon => iconMap[icon]),
        engineIcon: iconMap[project.engineIcon],
        storeIcon: iconMap[project.storeIcon]
    })
);

const games = transformedProjectIcons(projectData.games);
const prototypes = transformedProjectIcons(projectData.prototypes);

export default function Games() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div>
            <h1>Games and Demos</h1>
            <p style={{marginBottom: '30px', marginTop: '0px'}}>
                Here are some games I've created, either to be released, or during game jams, or to showcase my skills using Unity or Unreal Engine 5.
            </p>

            <section className={styles.projectsList}>
                {
                    games.map((game, id) => (
                        <Project
                            key={id}
                            id={id}
                            imgUrl={game.imgUrl} 
                            title={game.title} 
                            color={game.color} 
                            platfomrIcons={game.platformIcons} 
                            engineIcon={game.engineIcon} 
                            sizeClass={game.size} 
                            onClick={() => setSelectedProject(game)}
                        />
                    ))
                }
            </section>

            <h1 style={{marginTop: '80px'}}>Prototypes</h1>
            <p style={{marginBottom: '30px', marginTop: '0px'}}>
                And here you can find a few prototypes to test my skills or learn new ones.
            </p>

            <section className={styles.projectsList}>
            {
                    prototypes.map((prototype, id) => (
                        <Project
                            key={id}
                            id={id}
                            imgUrl={prototype.imgUrl} 
                            title={prototype.title} 
                            color={prototype.color} 
                            platfomrIcons={prototype.platformIcons} 
                            engineIcon={prototype.engineIcon} 
                            sizeClass={prototype.size} 
                            onClick={() => setSelectedProject(prototype)}
                        />
                    ))
                }
            </section>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            <p style={{marginTop: '30px'}}>
                And <a href="https://github.com/AitorGarciaM?tab=repositories">Here</a> you could find some other projects.
            </p>
        </div>
    )
}
