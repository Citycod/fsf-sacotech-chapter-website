import Section from '../components/Section';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Leadership.module.css';

const Leadership = () => {
    const leaders = [
        {
            id: 1,
            name: "Bro. Wisdom Edudje",
            position: "President",
            image: "src/assets/President.jpg",
            description: "Leading the fellowship with vision and passion for God's work."
        },
        {
            id: 2,
            name: "Bro Victor",
            position: "Gen Sec",
            image: "",
            description: "Supporting the vision and ensuring spiritual welfare of sisters."
        },
        {
            id: 3,
            name: "Sister Marvellous",
            position: "Asst. General Secretary",
            image: "src/assets/Asst. Gen Sec.jpg",
            description: "Managing the secretariat and ensuring smooth administration."
        },
        {
            id: 4,
            name: "Sis. Rebecca",
            position: "Choir Coordinator",
            image: "src/assets/Choir Cord.jpg",
            description: "Leading the fellowship in fervent prayers and intercession."
        },
        {
            id: 5,
            name: "Sis. Miracle",
            position: "Asst Chior & Media Coordinator",
            image: "src/assets/Asst.Chior,Media Cord.jpg",
            description: "Coordinating the teaching of the undiluted Word of God."
        },
        {
            id: 6,
            name: "Bro. Ifeoluwa",
            position: "Brother Cord",
            image: "src/assets/Brother Cord.jpg",
            description: "Leading the choir in spirit-filled worship and praise."
        },
        {
            id: 7,
            name: "Sis. Anuoluwapo",
            position: "Drama Cord & ARO.",
            image: "src/assets/Drama CordARO.jpg",
            description: "Spearheading evangelism and missions on campus."
        },
        {
            id: 8,
            name: "Sis. Timi",
            position: "Welfare Sec.",
            image: "src/assets/Welfare Cord.jpg",
            description: "Ensuring the well-being of every member of the fellowship."
        },
        {
            id: 9,
            name: "Bro. Samuel",
            position: "Follow Up & Organising Cord",
            image: "src/assets/Followupcord.jpg",
            description: "Ensuring the well-being of every member of the fellowship."
        },
        {
            id: 10,
            name: "Sis. Favour",
            position: "Sister's Cord",
            image: "src/assets/Sister Cord.jpg",
            description: "Ensuring the well-being of every member of the fellowship."
        },
        {
            id: 11,
            name: "Sis. Feyisayo",
            position: "Tresurer",
            image: "src/assets/Tresurer.jpg",
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
