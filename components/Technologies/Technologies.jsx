import styles from './style.module.css';

import { tech_list } from '../../src/data/Technologies';


const Technologies = () => {
    return (
        <section className={styles.tech_section}>
            <div className={styles.technologies}>
                <h3 className={styles.subtitle}>Технологии, С которыми я работаю</h3>

                <ul className={styles.list_tech}>
                    {tech_list.map((item, idx) => (
                        <li key={idx} className={styles.item_tech}>
                            <img className={styles.img} src={item.image} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Technologies;