// import the discord.js module
const Discord = require('discord.js');
// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();
// the token of your bot - https://discordapp.com/developers/applications/me
const token = 'MjM1NTQ2MzQwMDg2NjQ0NzM4.CxA8Zw.J9cMJDJP49NtpBGQmmuHkD9UabI';

bot.on('ready', () => {
  console.log('I am ready!');
});

const prefix = ".";

// create an event listener for messages

bot.on('message', (user, buffer) => {

});

// log our bot in
bot.login('MjM1NTQ2MzQwMDg2NjQ0NzM4.CxA8Zw.J9cMJDJP49NtpBGQmmuHkD9UabI');
