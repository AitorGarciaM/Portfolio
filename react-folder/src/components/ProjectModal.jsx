import styles from './ProjectModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ProjectModal({project, onClose}) {
    if(!project) return null;

    return(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => {e.stopPropagation()}}>
                
                <div className={styles.header} style={{ backgroundImage: `url(${project.imgUrl})` }}>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{project.title}</h2>

                    <p className={styles.description}>{project.description}</p>

                    <h3 className={styles.title}>Features</h3>

                    <div className={styles.featureList}>
                        <ul>
                            {
                                project.features?.map((feature, i) =>{
                                    return( 
                                        <li key={i}>
                                            <span className={styles.bullet}>·</span> {feature}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {
                        project.storeLink && (
                            <a
                                href={project.storeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.storeLink}
                            >
                                <FontAwesomeIcon
                                icon={project.storeIcon}
                                className={styles.storeIcon}
                                />
                                {console.log(project)}
                                Download
                            </a>
                        )
                    }

                    <hr className={styles.separation}/>

                    <div className={styles.icons}>
                        {
                            project.platformIcons?.map((icon, i) => {
                                return <FontAwesomeIcon icon={icon} key={i} className={styles.platformIcon}/>
                            })
                        }
                        {
                            project.engineIcon && (
                                project.engineIcon === "/img/unreal.svg" ? (<img src={project.engineIcon} alt="Unreal Engine logo" style={{width: '1.5em', color: 'white'}} />) : <FontAwesomeIcon icon={project.engineIcon} className={styles.engineIcon} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}