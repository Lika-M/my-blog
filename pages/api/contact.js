export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return;
    }

    const { email, name, message } = req.body;
    const isValid = email && email.includes('@') && name && message;

    if (!isValid) {
        res.status(422).json({ message: 'Invalid input' });
        return
    }

    const newMessage = {
        email,
        name,
        message
    };
    // store it in the DB
    console.log(newMessage);
    res.status(201).json({message: 'Successful stored.', data: newMessage})
}