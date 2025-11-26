import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import NewsletterForm from '../components/NewsletterForm';
import { FaBible, FaPray, FaUsers, FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import styles from './Home.module.css';
import about1 from '../assets/about1.jpg'

const Home = () => {
    const programs = [
        {
            title: "Bible Study",
            description: "Deep dive into the Word of God every Wednesday. Join us as we explore scriptures and grow in knowledge.",
            icon: <FaBible />,
        },
        {
            title: "Prayer Meeting",
            description: "A time of intercession and spiritual warfare. We meet every Friday to pray for our campus and nation.",
            icon: <FaPray />,
        },
        {
            title: "Sunday Service",
            description: "Our main weekly gathering for worship, word, and fellowship. Come and be blessed!",
            icon: <FaUsers />,
        },
        {
            title: "Evangelism",
            description: "Taking the gospel to the ends of the campus. Join the evangelism team every Saturday.",
            icon: <FaBullhorn />,
        },
        {
            title: "Special Events",
            description: "From concerts to academic seminars, we have various events to engage and empower students.",
            icon: <FaCalendarAlt />,
        },
    ];

    const upcomingEvents = [
        {
            title: "Fresher's Night",
            description: "Join us for a night of intense worship and prayer.",
            day: "15",
            month: "DEC",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "Campus Evangelism Outreach",
            description: "Taking the gospel to every corner of the campus.",
            day: "20",
            month: "DEC",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "End of Year Thanksgiving",
            description: "Celebrating God's faithfulness throughout the year.",
            day: "28",
            month: "DEC",
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "New Year Prayer Summit",
            description: "Starting the new year with prayer and declarations.",
            day: "05",
            month: "JAN",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
    ];

    const testimonies = [
        {
            text: "FSF has been a home away from home for me. I've grown spiritually and made amazing friends who share the same passion for Christ.",
            name: "Chidinma Okafor",
            course: "Computer Science, 300L",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        },
        {
            text: "Before joining FSF, I was struggling with my faith. But through the Bible studies and fellowship, I've discovered my purpose and calling.",
            name: "Oluwaseun Adeyemi",
            course: "Electrical Engineering, 400L",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        },
        {
            text: "The prayer meetings have transformed my life completely. I've experienced God's power in ways I never imagined possible.",
            name: "Blessing Nwankwo",
            course: "Mass Communication, 200L",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        },
        {
            text: "FSF taught me how to balance academics with spiritual growth. I'm excelling in my studies while growing deeper in God's word.",
            name: "Emeka Eze",
            course: "Mechanical Engineering, 500L",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        },
        {
            text: "The worship nights are absolutely incredible! I've encountered God's presence in such a powerful way through this fellowship.",
            name: "Amarachi Okonkwo",
            course: "Medicine & Surgery, 300L",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        },
    ];

    return (
        <>
            <Hero />

            {/* About Snapshot */}
            <Section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <h2 className="section-title">Who We Are</h2>
                            <p>
                                Foursquare Students Fellowship (FSF) is a vibrant community of students passionate about Jesus.
                                Our mission is to raise spirit-filled students who excel academically and impact their world for Christ.
                                We believe in the power of fellowship, the authority of God's Word, and the leading of the Holy Spirit.
                            </p>
                            <Button to="/about" variant="secondary">Read More About Us</Button>
                        </div>
                        <div className={styles.aboutImage}>
                            {/* Placeholder */}
                            <img src={about1} alt="About FSF" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Programs Section */}
            <Section className={styles.programsSection}>
                <div className="container">
                    <h2 className={`section-title text-center ${styles.programTitle}`}>Weekly Activities</h2>
                    <p className="text-center section-subtitle">Join us in our weekly programs designed for your spiritual growth.</p>

                    <div className={styles.programGrid}>
                        {programs.map((program, index) => (
                            <Card
                                key={index}
                                title={program.title}
                                description={program.description}
                                icon={program.icon}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Upcoming Events Section */}
            <Section className={styles.eventsSection}>
                <div className="container">
                    <h2 className="section-title text-center">Upcoming Events</h2>
                    <Carousel interval={15000}>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className={styles.eventCard}>
                                <div className={styles.eventDate}>
                                    <span className={styles.day}>{event.day}</span>
                                    <span className={styles.month}>{event.month}</span>
                                </div>
                                <img src={event.image} alt={event.title} />
                                <div className={styles.eventInfo}>
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <Button to="/events" variant="outlineDark" className={styles.eventBtn}>Details</Button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Testimonies Section */}
            <Section className={styles.testimoniesSection}>
                <div className="container">
                    <h2 className="section-title text-center" style={{ color: 'white' }}>What Students Say</h2>
                    <Carousel interval={15000}>
                        {testimonies.map((testimony, index) => (
                            <div key={index} className={styles.testimonyCard}>
                                <p className={styles.testimonyText}>"{testimony.text}"</p>
                                <div className={styles.testimonyAuthor}>
                                    <img src={testimony.image} alt={testimony.name} />
                                    <div>
                                        <h4>{testimony.name}</h4>
                                        <span>{testimony.course}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Section>

            {/* Newsletter Section */}
            <Section className={styles.newsletterSection}>
                <div className="container">
                    <NewsletterForm />
                </div>
            </Section>

            {/* Workforce CTA Section */}
            <Section className={styles.workforceSection}>
                <div className="container">
                    <div className={styles.workforceContent}>
                        <h2>Ready to Serve? Join the FSF Workforce!</h2>
                        <p>Use your gifts and talents to serve God and humanity. There is a place for you.</p>
                        <Button to="https://forms.google.com/your-form-link" variant="primary" className={styles.workforceBtn}>Join Workforce</Button>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Home;
