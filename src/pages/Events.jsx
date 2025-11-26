import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './Events.module.css';

// Import images from assets folder
import devotion from '../assets/devotion.jpg';
// import worshipImage from '../assets/worship.jpg';
// import academicImage from '../assets/academic-summit.jpg';
// import relationshipImage from '../assets/relationship-talk.jpg';

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');

    const events = [
        {
            id: 1,
            title: "Morning Devotion",
            description: "A special night to welcome all new students to campus with music, drama, and the word.",
            date: "Nov 26, 2025 till date",
            time: "6:00 AM",
            venue: "Whatsapp group",
            image: devotion,
            type: "upcoming",
            whatsappLink: "https://chat.whatsapp.com/Ig3mrrHpirFJYjTAq4e1gy?mode=wwt" // Add your WhatsApp group link here
        },
        {
            id: 2,
            title: "Worship Experience 2023",
            description: "Join us for an electrifying atmosphere of worship as we lift up the name of Jesus.",
            date: "Dec 10, 2023",
            time: "4:00 PM",
            venue: "Fellowship Centre",
            image: "",
            type: "upcoming",
            registerLink: "/register-worship" // Add other registration links as needed
        },
        {
            id: 3,
            title: "Academic Summit",
            description: "Learn the secrets to academic excellence from top scholars and professionals.",
            date: "Oct 15, 2023",
            time: "10:00 AM",
            venue: "Lecture Theatre A",
            image: "",
            type: "past"
        },
        {
            id: 4,
            title: "Relationship Talk",
            description: "An interactive session on building godly relationships and navigating campus life.",
            date: "Sep 20, 2023",
            time: "5:00 PM",
            venue: "Fellowship Centre",
            image: "",
            type: "past"
        }
    ];

    const filteredEvents = events.filter(event => event.type === activeTab);

    const handleRegisterClick = (event) => {
        if (event.whatsappLink) {
            // Redirect to WhatsApp group
            window.open(event.whatsappLink, '_blank', 'noopener,noreferrer');
        } else if (event.registerLink) {
            // Handle other registration links (internal navigation)
            // You can use your router here if using React Router
            window.location.href = event.registerLink;
        } else {
            // Default action for events without specific links
            alert(`Registration details for ${event.title} will be available soon!`);
        }
    };

    return (
        <div className={styles.eventsPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Events</h1>
                    <p>Stay updated with our upcoming programs and relive past memories.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    {/* Tabs */}
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'upcoming' ? styles.active : ''}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming Events
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'past' ? styles.active : ''}`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past Events
                        </button>
                    </div>

                    {/* Events Grid */}
                    <div className={styles.eventsGrid}>
                        {filteredEvents.map(event => (
                            <div key={event.id} className={styles.eventCard}>
                                <div className={styles.imageContainer}>
                                    <img src={event.image} alt={event.title} />
                                    <div className={styles.dateTag}>
                                        <FaCalendarAlt /> {event.date}
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{event.title}</h3>
                                    <div className={styles.meta}>
                                        <span><FaClock /> {event.time}</span>
                                        <span><FaMapMarkerAlt /> {event.venue}</span>
                                    </div>
                                    <p>{event.description}</p>
                                    {activeTab === 'upcoming' && (
                                        <Button
                                            variant="primary"
                                            className={styles.registerBtn}
                                            onClick={() => handleRegisterClick(event)}
                                        >
                                            {event.whatsappLink ? 'Join WhatsApp Group' : 'Register / Details'}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {filteredEvents.length === 0 && (
                            <div className={styles.noEvents}>
                                <p>No events found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Events;