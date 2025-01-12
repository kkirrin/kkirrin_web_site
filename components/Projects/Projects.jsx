import styles from './style.module.css';

import { Projects as projects } from '../../src/data/projects';


const Projects = () => {
     return (
            <section className={styles.projects_section}>
                <div className={styles.projects}>
                    <h3 className={styles.subtitle}>Проекты</h3>
    
                    <ul className={styles.projects_list}>
                        {projects.map((item, idx) => (
                            <li key={idx} className={styles.item_tech}>
                                <p>{item.name}</p>
                                <img src={item.image} alt={item.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        )
}

export default Projects;