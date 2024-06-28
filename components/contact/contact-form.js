import { useEffect, useState } from 'react';

import Notification from '../notification/notification.js';
import classes from './contact-form.module.css';

export default function ContactForm() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(null);
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            //clear before create new timer
            return () => clearTimeout(timer);
        }
    }, [requestStatus])

    async function sendContactData(contactData) {

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contactData),
            headers: { 'Content-Type': 'Application/json' }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message)
        }
        return data;
    }

    async function SendMessageHandler(e) {
        e.preventDefault();
        setRequestStatus('pending');

        const isValid = inputEmail && inputEmail.includes('@') && inputName && inputMessage;

        if (!isValid) {
            setRequestStatus('error');
            setRequestError('Invalid input!');
            return;
        }

        const userData = {
            email: inputEmail,
            name: inputName,
            message: inputMessage
        }

        try {
            await sendContactData(userData);
            setInputEmail('');
            setInputName('');
            setInputMessage('');
            setRequestStatus('success');

        } catch (error) {
            setRequestStatus('error');
            setRequestError(error.message);
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Your message sent successfully!'
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        };
    }

    return (
        <section className={classes.contact}>
            <h1>How can I  help you?</h1>
            <form className={classes.form} onSubmit={SendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email"
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" rows={5}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit" disabled={requestStatus === 'pending'}>Send Message</button>
                </div>
            </form>
            {notification && <Notification {...notification} />}
        </section>
    );
}