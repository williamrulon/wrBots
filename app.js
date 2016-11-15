const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "..";

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + 'help')) {
    message.reply('ty1, fire, daijo');
  }
  if (message.content.startsWith(prefix + 'ty1')) {
    message.reply('https://cdn.discordapp.com/attachments/168173696433782784/243158498479833088/ty1.png');
  }
  if (message.content.startsWith(prefix + 'fire')) {
    message.reply('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  if (message.content.startsWith(prefix + 'daijo')) {
    message.reply('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  if (message.content.startsWith(prefix + 'fine')) {
    message.reply('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }

});

client.login('MjM1NTQ2MzQwMDg2NjQ0NzM4.CwznSw.76pbGExc_GGnQnLXkHXrXerWVtU');
