import styles from './style.module.css';


const Button = ({color, text}) => {
    return (
        <button
            className={`${styles.btn_main} ${color === 'btn_main_white' ? styles.btn_main_white : styles.btn_main_black}`}

        >
            {/* <a href={link}> */}
                {text}
            {/* </a> */}
        </button>
    )
}

export default Button;