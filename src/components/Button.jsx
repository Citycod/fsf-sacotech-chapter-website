import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, variant = 'primary', onClick, className = '', type = 'button' }) => {
    const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

    if (to) {
        // Check if it's an external link
        const isExternal = to.startsWith('http://') || to.startsWith('https://');

        if (isExternal) {
            return (
                <a href={to} className={buttonClass} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }

        return (
            <Link to={to} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
