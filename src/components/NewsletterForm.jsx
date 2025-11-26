import { useState } from 'react';
import Button from './Button';
import styles from './NewsletterForm.module.css';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            // Using Web3Forms - Get your free access key at https://web3forms.com
            // 250 submissions/month on free tier
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your access key
                    email: email,
                    subject: 'New Newsletter Subscription - FSF Sacotech',
                    from_name: 'FSF Newsletter',
                    message: `New subscriber: ${email}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage('Thank you for subscribing! You will receive our latest updates.');
                setEmail('');

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                    setMessage('');
                }, 5000);
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Oops! Something went wrong. Please try again.');

            // Reset error message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }
    };

    return (
        <div className={styles.newsletterContent}>
            <h2>Subscribe to FSF Updates</h2>
            <p>Stay updated with our latest news, events, and spiritual resources.</p>

            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                />
                <Button
                    type="submit"
                    variant="secondary"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
            </form>

            {message && (
                <p className={`${styles.message} ${status === 'success' ? styles.success : styles.error}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default NewsletterForm;
