import * as React from 'react';
import styles from './style.module.css';
import { AnimatePresence, motion, useInView } from 'framer-motion';




const AnimateText = () => {

    const text = 'Привет, дружище!'
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (

        <div className={styles.title_wrapper_hero}>
            <AnimatePresence>
                {text.split('').map((char, i) => (
                    <motion.p
                    ref={ref}
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    exit="hidden"
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={styles.title_amime_hero}
                    >
                    {char === ' ' ? <span>&nbsp;</span> : char}
                </motion.p>
                ))}
            </AnimatePresence>
        </div>
    )
}



export default AnimateText;