import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { FaTimes } from 'react-icons/fa';
import styles from './Gallery.module.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Outreach', 'Bible Study', 'Sunday Service', 'Campus Invasion'];

    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Sunday Service' },
        { id: 2, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Bible Study' },
        { id: 3, src: 'https://images.unsplash.com/photo-1459749411177-0473ef71607b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Outreach' },
        { id: 4, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Campus Invasion' },
        { id: 5, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Sunday Service' },
        { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Outreach' },
        { id: 7, src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Bible Study' },
        { id: 8, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Campus Invasion' },
    ];

    const filteredImages = activeCategory === 'All'
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <div className={styles.galleryPage}>
            <div className={styles.header}>
                <div className="container">
                    <h1>Photo Gallery</h1>
                    <p>Capturing moments of fellowship, worship, and impact.</p>
                </div>
            </div>

            <Section>
                <div className="container">
                    {/* Filter Buttons */}
                    <div className={styles.filters}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div layout className={styles.galleryGrid}>
                        <AnimatePresence>
                            {filteredImages.map(image => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.imageItem}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img src={image.src} alt={`Gallery ${image.id}`} />
                                    <div className={styles.imageOverlay}>
                                        <span>View</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightbox}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
                            <img src={selectedImage.src} alt="Full size" />
                            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                                <FaTimes />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
