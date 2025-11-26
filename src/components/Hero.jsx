import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';
import styles from './Hero.module.css';
import heroImage from '../assets/hero image.jpg';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className={styles.hero}>
            <motion.div className={styles.heroBackground} style={{ y }}>
                <div className={styles.overlay}></div>
                {/* Placeholder for actual image */}
                <img
                    src={heroImage}
                    alt="Students Fellowship"
                    className={styles.heroImage}
                />
            </motion.div>

            <div className={`container ${styles.heroContent}`}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.heroTitle}
                >
                    Raising Spirit-Filled <br />
                    <span className={styles.highlight}>Students for Christ</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.heroSubtitle}
                >
                    Join a vibrant community of students dedicated to spiritual growth, academic excellence, and impactful service.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={styles.heroButtons}
                >
                    <Button to="https://chat.whatsapp.com/FBqfkF0CWq849kOS9395A8" variant="primary">Join the Fellowship</Button>
                    <Button to="/workforce" variant="outline">Get Involved</Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
