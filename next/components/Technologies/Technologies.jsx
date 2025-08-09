import styles from './style.module.css';

import { tech_list } from '@/data/Technologies';

import Image from 'next/image';

const Technologies = () => {
    return (
        <section className={styles.tech_section}>
            <div className='container relative'>

                <div className={styles.technologies}>
                    <h3 className={styles.subtitle}>Технологии, С которыми я работаю</h3>

                    <ul className={styles.list_tech}>
                        {tech_list.map((item, idx) => (
                            <li key={idx} className={styles.item_tech}>
                                <Image width={50} height={50} className={styles.img} src={item.image} alt={'Лого'} />
                            </li>
                        ))}
                        
                    </ul>
                </div>

                <div className='info right'>
                    <p style={{ opacity: 0.7, maxWidth: '300px', marginBottom: '10px' }}> Тут ведутся строительные работы, возможно, тут что-то будет интересное, следите за обновлением в <a href='https://t.me/Kkirrin'>телеграмм</a></p>
                    <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1MnJhd3lnMzBtMjNyMGhhemkyN3h6MmVzeTZ4czlkZGU5MXZ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mah9dFWo1WZX0WM62Q/giphy.gif' width={100} height={100} alt='' />
                </div>
                
            </div>
        </section>
    )
}

export default Technologies;