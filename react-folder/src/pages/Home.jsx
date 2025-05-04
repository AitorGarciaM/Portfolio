import { Link } from "react-router";

import styles from './Home.module.css';

export default function Home(){
    return(
        
        <div style={{display: 'flex'}}>
            <div className={styles.paragraph}>
                <h1>Hello!</h1>
                <p>
                I'm
                <strong> Aitor Garcia Miñana </strong>
                a game programmer specialized in <strong>Unity 3D</strong>, with strong proficiency in <strong>C#</strong> and experience in <strong>gameplay programming</strong> and <strong>performance optimization</strong>.
                I’m also familiar with <strong>Unreal Engine 5</strong>, working with <strong>Blueprints</strong> and basic <strong>C++</strong> principles.
                </p>
                <p>
                    I’m passionate about crafting high-quality interactive experiences, and I enjoy collaborating with <strong>multidisciplinary teams</strong> while applying <strong>clean, scalable, and performance-oriented code practices</strong>.
                </p>
                <p>Over the years, I’ve worked on a variety of <Link to='/games' className={styles.text}>game projects</Link>—some released, some experimental, and others created to push my skills further.</p>
                <p>
                    Feel free to reach out to me at
                    <Link to='mailto:aitor.garciamin@gmail.com' className={styles.text}> aitor.garciamin@gmail.com </Link>
                    or
                    <Link to='/contact' className={styles.text}> through here </Link>
                    .
                </p>
            </div>
            <div className={styles.photo}>
                <img className="avatar" src="/img/Avatar.png" alt="Avatar of Aitor Garcia Miñana" />
            </div>
        </div>
        
    )
}