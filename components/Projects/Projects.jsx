import styles from './style.module.css';

import { motion } from 'framer-motion';

import { Projects as projects } from '../../src/data/projects';


const Projects = () => {
     return (
            <section className={styles.projects_section}>
                <div className='container'>
                    <div className={styles.projects}>

                        <motion.h3 
                            className={styles.title_hero}
                            initial={{ opacity: 0, y: 0, transitionDuration: 1}}
                            whileInView={{ opacity: 1, y: 0}}
                        >
                            Проекты
                        </motion.h3>
        
                        <motion.ul className={styles.projects_list}>
                            {projects.map((item, idx) => (
                                <motion.li 
                                    initial={{ opacity: 0, y: 0, transitionDuration: 1}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    key={idx} 
                                    className={styles.item_project}
                                    >
                                        <div className={styles.img_wrapper}>
                                            <img 
                                                className={styles.item_project_image}
                                                src={item.image} 
                                                alt={item.alt} 
                                            />
                                        </div>

                                        <div className={styles.item_project_bottom}>
                                            <a className={styles.item_project_link} href={item.link}>
                                                Кликни, чтобы перейти
                                            </a>
                                            <p className={styles.item_project_title}>
                                                {item.title}
                                            </p>
                                        </div>
                                        
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </section>
        )
}

export default Projects;