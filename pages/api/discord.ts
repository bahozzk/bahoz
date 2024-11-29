import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const botToken = process.env.DISCORD_BOT_TOKEN; // Çevresel değişkenlerden bot token'ı alıyoruz
    const discordUserId = "702225440227459234";  // Sabit Discord kullanıcı ID'sini burada yazıyoruz

    if (!botToken) {
        return res.status(400).json({ error: "Missing bot token" });
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/users/${discordUserId}/presence`, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${botToken}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user presence');
        }

        const userPresence = await response.json();

        // Kullanıcı etkinliğini kontrol et
        const activity = userPresence?.activities?.[0]?.name || "No activity"; // İlk etkinliği alıyoruz
        const status = userPresence?.status || "offline"; // Kullanıcı durumu: online, idle, dnd, offline

        res.status(200).json({ activity, status });
    } catch (error) {
        console.error('Discord API error:', error);
        res.status(500).json({ error: 'Discord API error' });
    }
}
