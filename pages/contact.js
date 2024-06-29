import Head from "next/head.js";

import ContactForm from "../components/contact/contact-form.js";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Me!</title>
                <meta name="description" content="Send your message." />
            </Head>
            <ContactForm />
        </>
    );
}