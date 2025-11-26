import Section from '../components/Section';
import Card from '../components/Card';
import { FaBible, FaPray, FaUsers, FaBullhorn, FaMusic, FaChalkboardTeacher } from 'react-icons/fa';
import styles from './Programs.module.css';

const Programs = () => {
    const activities = [
        {
            day: "Wednesday",
            time: "5:00 PM",
            title: "Bible Study",
            description: "An in-depth study of the scriptures. We dig deep into the Word to understand God's will and ways.",
            icon: <FaBible />,
            location: "Fellowship Centre"
        },

        {
            day: "Sunday",
            time: "7:00 AM",
            title: "Sunday Service",
            description: "Our main celebration service featuring worship, word, and special ministrations.",
            icon: <FaUsers />,
            location: "School Auditorium"
        },
        {
            day: "Saturday",
            time: "4:00 PM",
            title: "Choir Rehearsal",
            description: "The choir rehearses to prepare for upcoming performances.",
            icon: <FaBullhorn />,
            location: "Fellowship Centre"
        },


    ];

    return (
        <div className={styles.programsPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Weekly Activities</h1>
                    <p>Join us as we grow together in faith and fellowship.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    <div className={styles.timeline}>
                        {activities.map((activity, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timeColumn}>
                                    <span className={styles.day}>{activity.day}</span>
                                    <span className={styles.time}>{activity.time}</span>
                                </div>
                                <div className={styles.contentColumn}>
                                    <Card
                                        title={activity.title}
                                        description={activity.description}
                                        icon={activity.icon}
                                        className={styles.programCard}
                                    />
                                    <div className={styles.locationTag}>
                                        📍 {activity.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Programs;
