import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const botToken = process.env.DISCORD_BOT_TOKEN; // Çevresel değişkenlerden alınacak bot token'ı
    const discordUserId = "702225440227459234";  // Sabit kullanıcı ID'sini burada yazıyoruz

    if (!botToken) {
        return res.status(400).json({ error: "Missing bot token" });
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/users/${discordUserId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${botToken}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user');
        }

        const userData = await response.json();
        res.status(200).json(userData);
    } catch (error) {
        console.error('Discord API error:', error);
        res.status(500).json({ error: 'Discord API error' });
    }
}
