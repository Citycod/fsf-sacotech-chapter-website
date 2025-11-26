import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { FaSearch, FaDownload, FaPlay, FaHeadphones } from 'react-icons/fa';
import styles from './Sermons.module.css';

const Sermons = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Faith', 'Prayer', 'Relationships', 'Academic Excellence', 'Holy Spirit'];

    const resources = [
        {
            id: 1,
            title: "Walking in Dominion",
            preacher: "Pst. John Doe",
            date: "Nov 12, 2023",
            category: "Faith",
            type: "audio",
            duration: "45 mins"
        },
        {
            id: 2,
            title: "The Power of Prayer",
            preacher: "Sis. Jane Smith",
            date: "Oct 28, 2023",
            category: "Prayer",
            type: "video",
            duration: "1 hr 10 mins"
        },
        {
            id: 3,
            title: "Excellence in Studies",
            preacher: "Dr. Alan Grant",
            date: "Sep 15, 2023",
            category: "Academic Excellence",
            type: "pdf",
            duration: "PDF"
        },
        {
            id: 4,
            title: "Understanding the Holy Spirit",
            preacher: "Rev. Mike Ross",
            date: "Aug 20, 2023",
            category: "Holy Spirit",
            type: "audio",
            duration: "50 mins"
        },
        {
            id: 5,
            title: "Godly Relationships",
            preacher: "Pst. Mrs. Doe",
            date: "Jul 05, 2023",
            category: "Relationships",
            type: "video",
            duration: "55 mins"
        }
    ];

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.preacher.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.sermonsPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Sermons & Resources</h1>
                    <p>Equip yourself with the Word of God and spiritual materials.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    {/* Search and Filter */}
                    <div className={styles.controls}>
                        <div className={styles.searchBar}>
                            <FaSearch className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search sermons, preachers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className={styles.categories}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Resources List */}
                    <div className={styles.resourceList}>
                        {filteredResources.map(resource => (
                            <div key={resource.id} className={styles.resourceItem}>
                                <div className={styles.resourceIcon}>
                                    {resource.type === 'audio' && <FaHeadphones />}
                                    {resource.type === 'video' && <FaPlay />}
                                    {resource.type === 'pdf' && <FaDownload />}
                                </div>
                                <div className={styles.resourceInfo}>
                                    <h3>{resource.title}</h3>
                                    <p className={styles.preacher}>By {resource.preacher}</p>
                                    <div className={styles.meta}>
                                        <span className={styles.tag}>{resource.category}</span>
                                        <span>{resource.date}</span>
                                        <span>•</span>
                                        <span>{resource.duration}</span>
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <Button variant="outlineDark" className={styles.actionBtn}>
                                        {resource.type === 'pdf' ? 'Download' : 'Listen/Watch'}
                                    </Button>
                                </div>
                            </div>
                        ))}

                        {filteredResources.length === 0 && (
                            <div className={styles.noResults}>
                                <p>No resources found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Sermons;
