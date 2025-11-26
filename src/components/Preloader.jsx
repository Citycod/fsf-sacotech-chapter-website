import { motion } from 'framer-motion';
import styles from './Preloader.module.css';
import logo from '../assets/Logo.png';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img src={logo} alt="FSF Logo" className={styles.logo} />

                <motion.div
                    className={styles.progressBar}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    );
};

export default Preloader;
