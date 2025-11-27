import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { FaTimes } from 'react-icons/fa';
import styles from './Gallery.module.css';

// Import images from assets folder
import image1 from '../assets/gallery 1.jpg';
import image2 from '../assets/gallery 2.jpg';
import image3 from '../assets/gallery 3.jpg';
import image4 from '../assets/gallery 4.jpg';
import image5 from '../assets/gallery 5.jpg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Outreach', 'Bible Study', 'Sunday Service', 'Campus Invasion'];

    const images = [
        { id: 1, src: image1, category: 'Sunday Service' },
        { id: 2, src: image2, category: 'Bible Study' },
        { id: 3, src: image3, category: 'Outreach' },
        { id: 4, src: image4, category: 'Campus Invasion' },
        { id: 5, src: image5, category: 'Sunday Service' },
        

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
                                    <img src={image.src} alt={`${image.category} event`} />
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
                            <img src={selectedImage.src} alt={`${selectedImage.category} event - full size`} />
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
