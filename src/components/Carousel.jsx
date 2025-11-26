import { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import styles from './Carousel.module.css';

const Carousel = ({ children, autoPlay = true, interval = 3000 }) => {
    const [width, setWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef();
    const controls = useAnimationControls();

    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
            setWidth(scrollWidth);
        }
    }, [children]);

    useEffect(() => {
        if (!autoPlay || width === 0 || isPaused) return;

        const animate = async () => {
            // Smoothly scroll to the end
            await controls.start({
                x: -width,
                transition: {
                    duration: interval / 1000,
                    ease: "linear",
                }
            });

            // Reset to start instantly
            await controls.set({ x: 0 });

            // Repeat
            animate();
        };

        animate();

        return () => controls.stop();
    }, [autoPlay, width, interval, isPaused, controls]);

    // Handle mouse wheel for horizontal scrolling
    const handleWheel = (e) => {
        if (carouselRef.current && Math.abs(e.deltaY) > 0) {
            e.preventDefault();
            const currentX = controls.get().x || 0;
            const newX = Math.max(Math.min(currentX - e.deltaY, 0), -width);
            controls.set({ x: newX });
            setIsPaused(true);

            // Resume auto-play after 2 seconds of no scrolling
            setTimeout(() => setIsPaused(false), 2000);
        }
    };

    return (
        <div className={styles.carouselContainer}>
            <motion.div
                ref={carouselRef}
                className={styles.carousel}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onWheel={handleWheel}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className={styles.innerCarousel}
                    animate={controls}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={() => setIsPaused(false)}
                >
                    {children}
                </motion.div>
            </motion.div>
            <p className={styles.instruction}>Drag, scroll, or hover to pause</p>
        </div>
    );
};

export default Carousel;
