import Section from '../components/Section';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Leadership.module.css';

const Leadership = () => {
    const leaders = [
        {
            id: 1,
            name: "Bro. David King",
            position: "President",
            image: "src/assets/President.jpg",
            description: "Leading the fellowship with vision and passion for God's work."
        },
        {
            id: 2,
            name: "Sis. Sarah Grace",
            position: "Vice President",
            image: "src/assets/Asst.Gen Sec.jpg",
            description: "Supporting the vision and ensuring spiritual welfare of sisters."
        },
        {
            id: 3,
            name: "Bro. Michael John",
            position: "General Secretary",
            image: "src/assets/Asst.Chior.jpg",
            description: "Managing the secretariat and ensuring smooth administration."
        },
        {
            id: 4,
            name: "Sis. Ruth Joy",
            position: "Prayer Coordinator",
            image: "src/assets/Media Cord.jpg",
            description: "Leading the fellowship in fervent prayers and intercession."
        },
        {
            id: 5,
            name: "Bro. Peter Rock",
            position: "Bible Study Sec.",
            image: "src/assets/Brother Cord.jpg",
            description: "Coordinating the teaching of the undiluted Word of God."
        },
        {
            id: 6,
            name: "Sis. Esther Queen",
            position: "Music Director",
            image: "src/assets/Choir Cord.jpg",
            description: "Leading the choir in spirit-filled worship and praise."
        },
        {
            id: 7,
            name: "Bro. Paul Saint",
            position: "Outreach Coord.",
            image: "src/assets/Drama Cord.jpg",
            description: "Spearheading evangelism and missions on campus."
        },
        {
            id: 8,
            name: "Sis. Mary Love",
            position: "Welfare Sec.",
            image: "src/assets/Welfare Cord.jpg",
            description: "Ensuring the well-being of every member of the fellowship."
        }
    ];

    return (
        <div className={styles.leadershipPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Our Leadership</h1>
                    <p>Meet the dedicated team serving God and the fellowship this tenure.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    <div className={styles.grid}>
                        {leaders.map(leader => (
                            <div key={leader.id} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <img src={leader.image} alt={leader.name} />
                                    <div className={styles.socialOverlay}>
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaInstagram /></a>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{leader.name}</h3>
                                    <span className={styles.position}>{leader.position}</span>
                                    <p className={styles.description}>{leader.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Leadership;
