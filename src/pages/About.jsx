import Section from '../components/Section';
import styles from './About.module.css';
import { FaHeart, FaLightbulb, FaHandsHelping, FaBible } from 'react-icons/fa';
import about1 from '../assets/about1.jpg';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.overlay}></div>
                <img
                    src={about1}
                    alt="About FSF"
                    className={styles.heroImage}
                />
                <div className={`container ${styles.heroContent}`}>
                    <h1>About Us</h1>
                    <p>Raising Spirit-Filled Students for Christ</p>
                </div>
            </div>

            {/* Mission & Vision */}
            <Section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.iconBox}><FaLightbulb /></div>
                            <h2>Our Vision</h2>
                            <p>To raise a generation of spirit-filled students who will take over the campus and the world for Christ, excelling in all spheres of life.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconBox}><FaHeart /></div>
                            <h2>Our Mission</h2>
                            <p>To preach the gospel to every student, disciple them in the way of the Lord, and empower them to fulfill their God-given destiny.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section className={styles.valuesSection}>
                <div className="container">
                    <h2 className="section-title text-center">Core Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueItem}>
                            <FaBible className={styles.valueIcon} />
                            <h3>Word Based</h3>
                            <p>We are committed to the unadulterated Word of God as our standard for living.</p>
                        </div>
                        <div className={styles.valueItem}>
                            <FaHandsHelping className={styles.valueIcon} />
                            <h3>Service</h3>
                            <p>We believe in serving God and humanity with our gifts and talents.</p>
                        </div>
                        <div className={styles.valueItem}>
                            <FaHeart className={styles.valueIcon} />
                            <h3>Love</h3>
                            <p>We are a family bound together by the love of Christ.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Tenure Theme */}
            <Section className={styles.themeSection}>
                <div className="container">
                    <div className={styles.themeContent}>
                        <h2>Tenure Theme: <span>DOMINION</span></h2>
                        <p className={styles.scripture}>"And God said, Let us make man in our image, after our likeness: and let them have dominion..." - Genesis 1:26</p>
                        <p>This academic session, God is set to establish His dominion in our lives and on our campus. Join us as we walk in this reality.</p>
                    </div>
                </div>
            </Section>

            {/* Leadership Structure */}
            <Section className={styles.leadershipSection}>
                <div className="container">
                    <h2 className="section-title text-center">Leadership Structure</h2>
                    <p className="text-center section-subtitle">FSF is led by a team of dedicated student leaders under the guidance of the Holy Spirit and our parent church.</p>

                    <div className={styles.structureGrid}>
                        <div className={styles.structureItem}>
                            <h3>Executive Council</h3>
                            <p>Led by the President, responsible for the overall administration of the fellowship.</p>
                        </div>
                        <div className={styles.structureItem}>
                            <h3>Unit Heads</h3>
                            <p>Coordinators of various workforce departments ensuring smooth operations.</p>
                        </div>
                        <div className={styles.structureItem}>
                            <h3>Cell Leaders</h3>
                            <p>Leaders of small groups for close-knit fellowship and discipleship.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
