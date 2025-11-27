import Section from '../components/Section';
import Button from '../components/Button';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out to us for enquiries, counseling, or prayer.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoCard}>
                                <h2>Get in Touch</h2>
                                <p>Feel free to visit us or contact us via any of the channels below.</p>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconBox}><FaMapMarkerAlt /></div>
                                    <div>
                                        <h3>Visit Us</h3>
                                        <p>Foursquare Students Fellowship,<br />Sacotech Campus, Nigeria.</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconBox}><FaEnvelope /></div>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>fsfsacoetec@gmail.com</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconBox}><FaPhone /></div>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+234 7048760133<br>+234 8077561067<br/>+234 8127122305</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconBox}><FaClock /></div>
                                    <div>
                                        <h3>Opening Hours</h3>
                                        <p>Mon - Fri: 9:00 AM - 5:00 PM<br />Sun: 8:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formColumn}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <h2>Send a Message</h2>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="Your Name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="Your Phone Number" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                                </div>
                                <Button type="submit" variant="primary" className={styles.submitBtn}>Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <Section className={styles.mapSection}>
                <div className="container">
                    <h2 className="section-title text-center">Locate Us</h2>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.527638695278943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1645564756246!5m2!1sen!2sng"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
