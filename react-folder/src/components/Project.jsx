import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import styles from './Project.module.css'

export default function Project({id, imgUrl, title, color, platfomrIcons = [], engineIcon, sizeClass = '', onClick}) {
    console.log(engineIcon);


    return(
        <div id={id} className={clsx(styles.projectItem, sizeClass && styles[sizeClass])} onClick={onClick}>
            <div 
                className={styles.projectItemImage}
                style={{background: `url(${imgUrl})`}}
            >
            </div>
            <div className={styles.titleBar} style={{backgroundColor: color}}>
                <div style={{display: 'flex', justifyContent:'center', alignContent: 'center', padding: '0', margin: '0', }}>
                    {
                        platfomrIcons.map((icon, idx) => (
                            <FontAwesomeIcon
                                icon={icon}
                                key={idx}
                                style={{ color: '#fff', margin: '19px 8px' }}
                            />
                        ))
                    }
                    <div className={styles.titleText}>{title}</div>
                    {
                        engineIcon === "/img/unreal.svg" ? (<img src={engineIcon} alt="Unreal Engine logo" style={{width: '1.5em', color: 'white'}} />) : <FontAwesomeIcon icon={engineIcon} className={styles.engineIcon} />
                    }                    
                </div>
            </div>
        </div>
    )
}
