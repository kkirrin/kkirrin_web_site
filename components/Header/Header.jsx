import styles from './style.module.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <div>
                    <span>Logo</span>
                </div>

                <div>
                    <button>
                        Menu
                    </button>
                </div>
            </div>

            <div>
                Works
    
            </div>

            <div>
                Experience
            </div>

             <div>
                Contacts
            </div>
        </header>
    )
}


export default Header;