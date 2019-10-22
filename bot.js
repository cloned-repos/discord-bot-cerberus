const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const quotes = [
    'everything is a didlo is you are brave enough!',
    'if your girl ever catches you looking at another women just say; "I am glad you do not dress like that"',
    'take womens rights away',
    'if it breethes, it is a thot',
    'repeal the 19th',
    'real men go whatever the fuck they like'
]

client.on('message', msg => {
    if (msg.content === '!quote') {
        const idx = Math.round(Math.random() * quotes.length);
        msg.reply(quotes[idx]);
    }
    if (msg.content === '!help') {
        msg.reply(`
list of 🐺 bot commands:
        **!quote**: random mgtow quote of the day!
        `);
    }
});

const token = Buffer.from(auth.token,'base64').toString('ascii');

client.login(token);