import Section from '../components/Section';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Leadership.module.css';

const Leadership = () => {
    const leaders = [
        {
            id: 1,
            name: "Bro. David King",
            position: "President",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Leading the fellowship with vision and passion for God's work."
        },
        {
            id: 2,
            name: "Sis. Sarah Grace",
            position: "Vice President",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Supporting the vision and ensuring spiritual welfare of sisters."
        },
        {
            id: 3,
            name: "Bro. Michael John",
            position: "General Secretary",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Managing the secretariat and ensuring smooth administration."
        },
        {
            id: 4,
            name: "Sis. Ruth Joy",
            position: "Prayer Coordinator",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Leading the fellowship in fervent prayers and intercession."
        },
        {
            id: 5,
            name: "Bro. Peter Rock",
            position: "Bible Study Sec.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Coordinating the teaching of the undiluted Word of God."
        },
        {
            id: 6,
            name: "Sis. Esther Queen",
            position: "Music Director",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Leading the choir in spirit-filled worship and praise."
        },
        {
            id: 7,
            name: "Bro. Paul Saint",
            position: "Outreach Coord.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            description: "Spearheading evangelism and missions on campus."
        },
        {
            id: 8,
            name: "Sis. Mary Love",
            position: "Welfare Sec.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
