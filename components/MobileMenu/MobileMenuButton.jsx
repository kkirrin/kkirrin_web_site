import styles from './style.module.css';

const MobileMenuButton = ({ isOpen, onClick }) => {
    return (
      <button
        className={`${styles.mobile_menu_button} ${isOpen ? styles.open : ''}`}
        onClick={onClick}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
          <span className={styles.burger_icon}>
              <span className={styles.burger_line}></span>
              <span className={styles.burger_line}></span>
              <span className={styles.burger_line}></span>
           </span>
      </button>
    );
};

export default MobileMenuButton;