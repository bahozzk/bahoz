export default async function handler(req, res) {
    const discordUserId = '702225440227459234'; // Buraya Discord User ID'nizi yazın
    const lanyardUrl = `https://api.lanyard.rest/v1/users/${discordUserId}`;

    try {
        const response = await fetch(lanyardUrl);
        const data = await response.json();

        if (data.success) {
            res.status(200).json(data.data);
        } else {
            res.status(500).json({ error: 'Lanyard API error' });
        }
    } catch (error) {
        console.error('Discord API error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
