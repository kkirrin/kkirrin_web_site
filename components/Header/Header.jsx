import MobileMenuButton from '../MobileMenu/MobileMenuButton';
import styles from './style.module.css';

import { useState } from 'react';


const Header = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

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



                    <MobileMenuButton isOpen={isMenuOpen} onClick={handleToggleMenu} />

                    <nav className={`${styles.mobile_menu} ${isMenuOpen ? styles.mobile_menu_open : ''}`}>
                        <ul>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Услуги</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>

                </div>

                   
            </div>
        </header>
    )
}


export default Header;