import styles from './style.module.css';

import { motion } from 'framer-motion';


import { Experience as experience_list } from '../../src/data/experience';

const Experience = () => {
    return (
        <section id='experience'>
            <div className="container">
                <h3 className={styles.title_hero}>
                    Опыт
                </h3>

                 <motion.ul className={styles.experience_list}>
                    {experience_list.map((item, idx) => (
                        <motion.li 
                            initial={{ opacity: 0, y: 0, transitionDuration: 1}}
                            whileInView={{ opacity: 1, y: 0}}
                            key={idx} 
                            className={styles.item_experience}
                            >
                              

                              <div className={styles.wrapper}>
                                    <div className={styles.main_content}>
                                        {/* <p>Logo</p> */}
                                        <h3 className={styles.exp_title}>{item.title}</h3>
                                    </div>

                                    <div className={styles.exp_date}>{item.date}</div>
                              </div>

                              <div className={styles.desc}>
                                    <p className={styles.desc_text}>
                                        {item.desc}
                                    </p>
                              </div>
                                
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}


export default Experience;