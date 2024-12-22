import styles from './style.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.wrapper}>

                    <div>
                        <div>
                            <span>Kkirrin Fullstack Developer | KFD </span>
                        </div>
                    </div>

                     <ul className={styles.nav}>
                        <li>
                            Works
                        </li>

                        <li>
                            Experience
                        </li>

                        <li>
                            Contacts
                        </li>
                    </ul>
                </div>

                   
            </div>
        </header>
    )
}


export default Header;