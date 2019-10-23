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
    'if she breethes, it is a thot',
    'repeal the 19th',
    'real men go whatever the fuck they like',
    'the south shall rise again, ... when hell freezes over'
]

const response = [
     'what do you want',
     'i am busy',
     'be nice or I will ban you',
     'I am not payed to talk to you'
]


client.on('message', msg => {
    if (msg.content === '!members'){
	const count = msg.member.guild.memberCount;
        msg.reply(`The number of members is now ${count}, bring me more minions`);
    }
    if (msg.content === '!quote') {
        const idx = Math.round(Math.random() * quotes.length);
        msg.reply(quotes[idx]);
    }
    if (msg.content.toLowerCase().includes('cerberus')){
        const ran = Math.random();
	const idx = Math.trunc(ran*response.length);
	console.log(idx, ran);
	const r = response[idx];
	msg.reply(r);
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
