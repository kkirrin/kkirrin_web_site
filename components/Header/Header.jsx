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
                        <ul style={{ marginTop: '30px'}}>
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Услуги</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>



                        <div>
                            <p style={{ opacity: 0.7, maxWidth: '300px', marginBottom: '10px' }}> Тут ведутся строительные работы, возможно, тут что-то будет интересное, следите за обновлением в <a href='https://t.me/Kkirrin'>телеграмм</a></p>
                            <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXR1MnJhd3lnMzBtMjNyMGhhemkyN3h6MmVzeTZ4czlkZGU5MXZ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Mah9dFWo1WZX0WM62Q/giphy.gif' width={100} height={100} alt='' />
                        </div>
                            
                    </nav>

                </div>

                

                   
            </div>
        </header>
    )
}


export default Header;