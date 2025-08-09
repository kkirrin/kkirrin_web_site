import styles from './style.module.css';


const Button = ({ color, text, href, target, download }) => {
  const className = `${styles.btn_main} ${color === 'btn_main_white' ? styles.btn_main_white : styles.btn_main_black}`

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download ? '' : undefined}
      >
        {text}
      </a>
    )
  }

  return (
    <button className={className}>
      {text}
    </button>
  )
}

export default Button;