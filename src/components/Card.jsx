import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ title, description, icon, image, onClick, className = '' }) => {
    return (
        <motion.div
            className={`${styles.card} ${className}`}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClick}
        >
            {image && (
                <div className={styles.cardImageContainer}>
                    <img src={image} alt={title} className={styles.cardImage} />
                </div>
            )}
            <div className={styles.cardContent}>
                {icon && <div className={styles.cardIcon}>{icon}</div>}
                <h3 className={styles.cardTitle}>{title}</h3>
                {description && <p className={styles.cardDescription}>{description}</p>}
            </div>
        </motion.div>
    );
};

export default Card;
