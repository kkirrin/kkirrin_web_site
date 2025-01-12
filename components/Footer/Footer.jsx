import styles from './style.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <h3 className={styles.title_hero}>Контакты</h3>
                <div className={styles.wrapper_footer}>
                    <div>
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
                            <li>Телеграм</li>
                            <li>Вк</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;