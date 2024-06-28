import { connectDatabase, insertCollectionDocument } from "../../util/api-db.js";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { email, name, message } = req.body;
    const isValid = email && email.includes('@') && name && message;

    if (!isValid) {
        res.status(422).json({ message: 'Invalid input' });
        return;
    }

    const newMessage = {
        email,
        name,
        message,
        createdAt: new Date().toISOString() 
    };

    let client;

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the DB failed.' });
        return;
    }

    try {
        await insertCollectionDocument(client, newMessage);
        res.status(201).json({ message: 'Message stored successfully!', data: newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Storing the message failed.' });
    } finally {
        try {
            await client.close();
        } catch (error) {
            console.error('Failed to close the database connection:', error);
        }
    }
}
