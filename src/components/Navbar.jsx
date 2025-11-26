import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCalendarAlt, FaBible, FaImages, FaUsers, FaEnvelope, FaHandsHelping } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Navigation links data
    const navLinks = [
        { name: 'Home', path: '/', icon: <FaHome /> },
        { name: 'About', path: '/about', icon: <FaInfoCircle /> },
        { name: 'Programs', path: '/programs', icon: <FaCalendarAlt /> },
        { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
        { name: 'Gallery', path: '/gallery', icon: <FaImages /> },
        { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Toggle menu
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // Close menu function
    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Handle escape key to close menu
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, closeMenu]);

    return (
        <nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className={`container ${styles.navContainer}`}>
                {/* Logo */}
                <Link
                    to="/"
                    className={styles.logo}
                    onClick={closeMenu}
                    aria-label="FSF Sacotech Home"
                >
                    <img
                        src={logo}
                        alt="FSF Sacotech"
                        className={styles.logoImage}
                    />
                    <span className={styles.logoTitle}>FSF SACOTECH</span>
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="nav-menu"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation menu */}
                <ul
                    id="nav-menu"
                    className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}
                >
                    {navLinks.map((link, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link
                                to={link.path}
                                className={`${styles.navLink} ${location.pathname === link.path ? styles.activeLink : ''}`}
                                onClick={closeMenu}
                                aria-current={location.pathname === link.path ? 'page' : undefined}
                            >
                                <span className={styles.navIcon}>{link.icon}</span>
                                <span className={styles.navText}>{link.name}</span>
                            </Link>
                        </li>
                    ))}

                    {/* CTA Button */}
                    <li className={styles.navItem}>
                        <Link
                            to="/workforce"
                            className={`${styles.navLink} ${styles.ctaButton}`}
                            onClick={closeMenu}
                        >
                            <span className={styles.navIcon}><FaHandsHelping /></span>
                            <span className={styles.navText}>Join Workforce</span>
                        </Link>
                    </li>
                </ul>

                {/* Overlay for mobile menu */}
                {isOpen && (
                    <div
                        className={styles.overlay}
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;