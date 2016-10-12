const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MjM1NTQ2MzQwMDg2NjQ0NzM4.Ct8JJg.kK7afS9HT_bRo8tnp667MOeKl7g');
