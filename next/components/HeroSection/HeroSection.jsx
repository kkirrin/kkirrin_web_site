"use client"

import styles from './style.module.css';
import { motion } from 'framer-motion';
import Button from '@/ui/Button/Button';

const HeroSection = () => {
    
    return (
        <section className={styles.hero}>
            <img className={styles.bg_hero} src="/bg.png" alt="Hero Image" />
            <div className="container">
                <div className={styles.content_hero}>

                    <div className={styles.avatar_hero_wrapper}>
                        <img className={styles.avatar_hero} src="/avatar.png" alt="Hero Avatar" />
                    </div>

                    

                    <motion.h2 
                        className={styles.title_hero}
                        initial={{ opacity: 0, y: 0, transitionDuration: 1}}
                        whileInView={{ opacity: 1, y: 0}}
                    >
                        Пишу код, <br />пью чай и пишу блог</motion.h2>
                   
                    <motion.p 
                        className={styles.desc_hero}
                        initial={{ opacity: 0, y: 0, transitionDuration: 1}}
                        whileInView={{ opacity: 1, y: 0}}  
                >

                        Я - фуллс   так программист во Владивостоке, пишу приложения, сайты, магазины и веду свой телеграмм канал @telegram_id. Во фронтенд разработке уже более 2 лет, бэкенд пишу около 1 года. Также разрабатываю телеграмм-ботов для ваших чатов.</motion.p>
                

                <div className={styles.btn_wrapper_hero}>
                    <div>
                        <Button
                          text={'Связаться со мной'}
                          color={'btn_main_white'}
                          href={'https://t.me/Kkirrin'}
                          target={'_blank'}
                        />
                    </div>

                    <div>
                        <Button
                          text={'Скачать резюме'}
                          color={'btn_main_black'}
                          href={'/cv-main.pdf'}
                          download
                        />
                    </div>
                </div>
                </div>

            </div>
        </section>
  );
};

export default HeroSection;

