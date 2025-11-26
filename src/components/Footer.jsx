import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../assets/Logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                {/* Brand Section */}
                <div className={styles.brandSection}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="FSF Sacotech" className={styles.logoImage} />
                        <span className={styles.logoTitle}>FSF SACOTECH</span>
                    </Link>
                    <p>Raising Spirit-Filled Students for Christ. Join us as we grow in faith and fellowship.</p>
                    <div className={styles.socials}>
                        <a href=" https://www.facebook.com/profile.php?id=100086289546936"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href=" https://vm.tiktok.com/ZSHTrwyvQv9gx-sVdNx/"><FaTiktok /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.linkSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/sermons">Sermons</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.contactSection}>
                    <h3>Contact Info</h3>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <span>Sacotech Campus, Nigeria</span>
                    </div>
                    <div className={styles.contactItem}>
                        <FaEnvelope className={styles.contactIcon} />
                        <span>fsfsacoetec@gmail.com</span>
                    </div>
                    <div className={styles.contactItem}>
                        <FaPhone className={styles.contactIcon} />
                        <span>+234 7048760133</span>
                        <span>+234 8077561067</span>
                        <span>+234 8127122305</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {currentYear} Foursquare Students Fellowship, Sacotech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
