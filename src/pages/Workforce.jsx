import Section from '../components/Section';
import Button from '../components/Button';
import { FaMicrophone, FaPray, FaHandsHelping, FaCamera, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';
import styles from './Workforce.module.css';

const Workforce = () => {
    const departments = [
        {
            title: "Choir",
            description: "Ministering to God and His people through spirit-filled songs and worship.",
            icon: <FaMicrophone />
        },
        {
            title: "Prayer Unit",
            description: "Standing in the gap for the fellowship, the campus, and the nation.",
            icon: <FaPray />
        },
        {
            title: "Ushering",
            description: "Ensuring orderliness and welcoming worshippers with a warm smile.",
            icon: <FaHandsHelping />
        },
        {
            title: "Media & Technical",
            description: "Handling sound, projection, photography, and social media management.",
            icon: <FaCamera />
        },
        {
            title: "Welfare",
            description: "Caring for the needs of brethren and ensuring everyone feels at home.",
            icon: <FaUserFriends />
        },
        {
            title: "Bible Study",
            description: "Teaching and discipling students in the knowledge of God's Word.",
            icon: <FaChalkboardTeacher />
        }
    ];

    return (
        <div className={styles.workforcePage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Join the Workforce</h1>
                    <p>Serve the Lord with your gifts and talents. Find your place in God's house.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    <div className={styles.intro}>
                        <h2>Why Serve?</h2>
                        <p>
                            Service is a privilege and a pathway to greatness in the Kingdom.
                            By joining a workforce unit, you not only contribute to the growth of the fellowship
                            but also develop your spiritual gifts and leadership skills.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {departments.map((dept, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconBox}>{dept.icon}</div>
                                <h3>{dept.title}</h3>
                                <p>{dept.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <h2>Ready to Labor for the Master?</h2>
                        <p>Click the button below to fill the registration form.</p>
                        <Button
                            to="https://docs.google.com/forms"
                            variant="primary"
                            className={styles.applyBtn}
                            target="_blank"
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Workforce;
