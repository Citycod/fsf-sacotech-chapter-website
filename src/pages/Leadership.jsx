import Section from '../components/Section';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Leadership.module.css';

// Local asset imports
import PresidentImg from '../assets/President.jpg';
import AsstGenSecImg from '../assets/Asst. Gen Sec.jpg';
import AsstChiorImg from '../assets/Asst.Chior,Media Cord.jpg';

import BrotherCordImg from '../assets/Brother Cord.jpg';
import ChoirCordImg from '../assets/Choir Cord.jpg';
import DramaCordImg from '../assets/Drama CordARO.jpg';
import FollowupCordImg from '../assets/Followupcord.jpg';
import SisterCordImg from '../assets/Sister Cord.jpg';
import TresurerImg from '../assets/Tresurer.jpg';
import WelfareCordImg from '../assets/Welfare Cord.jpg';
import GenSecImg from '../assets/Gen Sec.jpeg';

const Leadership = () => {
    const leaders = [
        {
            id: 1,
            name: "Bro. Wisdom Edudje",
            position: "President",
            image: PresidentImg,
            description: "Leading the fellowship with vision and passion for God's work."
        },
        {
            id: 2,
            name: "Bro Victor",
            position: "Gen Sec",
            image: GenSecImg,
            description: "Managing the secretariat and ensuring smooth administration."
        },
        {
            id: 3,
            name: "Sister Marvellous",
            position: "Asst. General Secretary",
            image: AsstGenSecImg,
            description: "Assisting in secretariat duties and documentation."
        },
        {
            id: 4,
            name: "Sis. Rebecca",
            position: "Choir Coordinator",
            image: ChoirCordImg,
            description: "Leading the choir in spirit-filled worship and praise."
        },
        {
            id: 5,
            name: "Sis. Miracle",
            position: "Asst Chior & Media Coordinator",
            image: AsstChiorImg,
            description: "Supporting the music ministry and managing media projection."
        },
        {
            id: 6,
            name: "Bro. Ifeoluwa",
            position: "Brother Cord",
            image: BrotherCordImg,
            description: "Overseeing the spiritual and general welfare of the brothers."
        },
        {
            id: 7,
            name: "Sis. Anuoluwapo",
            position: "Drama Cord & ARO.",
            image: DramaCordImg,
            description: "Coordinating drama ministrations and alumni relations."
        },
        {
            id: 8,
            name: "Sis. Timi",
            position: "Welfare Sec.",
            image: WelfareCordImg,
            description: "Ensuring the welfare of every member of the fellowship."
        },
        {
            id: 9,
            name: "Bro. Samuel",
            position: "Follow Up & Organising Cord",
            image: FollowupCordImg,
            description: "Coordinating follow-up of new members and organizing programs."
        },
        {
            id: 10,
            name: "Sis. Favour",
            position: "Sister's Cord",
            image: SisterCordImg,
            description: "Overseeing the spiritual and general welfare of the sisters."
        },
        {
            id: 11,
            name: "Sis. Feyisayo",
            position: "Tresurer",
            image: TresurerImg,
            description: "Managing the fellowship's finances with integrity."
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
