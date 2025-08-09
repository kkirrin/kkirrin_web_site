'use client'
import styles from './style.module.css'

const Footer = () => {
    return (
        <footer id='contacts' className={styles.footer}>
            <div className='container'>
                <h3 className={styles.title_hero}>Контакты</h3>
                <div className={`${styles.wrapper_footer} relative`}>
                    <div className={styles.desc}>
                        Фуллстек-разработчик из Владивостока с 3+ годами опыта. Экспертиза во фронтенде (React, Next.js, TypeScript), бэкенде (Node.js, Express.js, Rest API, Nest.js), telegram API и базах данных (PostgreSQL, MySQL). Практический опыт разработки веб-приложений различной сложности. Готов к новым вызовам!
                    </div>

                    <div className={styles.email_wrapper}>
                        Почта для связи:
                        <a href="mailto:kkirrinweb@yandex.ru" className={styles.footer_email}>
                            kkrrinweb@yandex.ru
                        </a>
                    </div>

                    <div>
                        Социальные сети

                        <ul className={styles.socials_links}>
                            <li><a href='https://t.me/Kkirrin'>Телеграм</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;