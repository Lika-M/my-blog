import { useState } from 'react';

import classes from './contact-form.module.css';

export default function ContactForm() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [formState, setFormState] = useState(null); //pending success fail

    async function SendMessageHandler(e) {
        e.preventDefault();
        setFormState('pending');

        const userData = {
            email: inputEmail,
            name: inputName,
            message: inputMessage
        }
        // add client-side validation

        // try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'Content-Type': 'Application/json' }
            });


            const data = await response.json();

        // } catch (error) {

        // }

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
                        <label htmlFor="name">Your Email</label>
                        <input type="text" id="name"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor="message">Your Email</label>
                    <textarea type="text" id="message" rows={5}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
}