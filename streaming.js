const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const { Client, ActivityType } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', () => {
    console.log(`로그인됨: ${client.user.tag}`);

    const statuses = [
        {
            name: '24H Online',
            url: 'https://twitch.tv/5xn2e',
            large_image: 'https://i.imgur.com/GeBUjlw.jpeg',
            large_text: '플로버 ♡'
        },
        {
            name: '모든 문의는 디엠으로',
            url: 'https://www.twitch.tv/5xn2e',
            large_image: 'https://i.imgur.com/GeBUjlw.jpeg',
            large_text: '플로버 ♡'
        }
    ];

    let index = 0;

    setInterval(() => {
        const status = statuses[index];

        client.user.setPresence({
            activities: [{
                name: status.name,
                type: ActivityType.Streaming,
                url: status.url,
                assets: {
                    large_image: status.large_image,
                    large_text: status.large_text
                }
            }],
            status: 'online'
        });

        index = (index + 1) % statuses.length;
    }, 7000);
});

app.get('/', (req, res) => {
    res.send('Self-bot running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

client.login(process.env.USER_TOKEN);