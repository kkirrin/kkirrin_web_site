"use client"
import styles from './style.module.css';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { Projects as projects } from '@/data/projects';


const Projects = () => {
     return (
            <section id='works' className={styles.projects_section}>
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
                                            <Image 
                                                className={styles.item_project_image}
                                                src={item.image} 
                                                height={350}
                                                width={350}
                                                alt={`item.alt`} 
                                            />
                                        </div>

                                        <div className={styles.item_project_bottom}>
                                            <a target='_blank' className={styles.item_project_link} href={item.link}>
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