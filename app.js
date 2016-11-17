const Discord = require('discord.js');
const bot = new Discord.Client();
//const connect = require('../structures/VoiceChannel');

bot.on('ready', () => {
  console.log('I\'m alive!');
});

const prefix = ".";

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('Command List:\n- ty1   - crabman\n- fire   - fine\n- daijo\n- kms\n');
  }
  else if (message.content.startsWith(prefix + 'ty1')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/243158498479833088/ty1.png');
  }
  else if (message.content.startsWith(prefix + 'fire')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  else if (message.content.startsWith(prefix + 'daijo')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  else if (message.content.startsWith(prefix + 'kms')) {
    message.channel.sendMessage(':^)');
  }
  else if (message.content.startsWith(prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if (message.content.startsWith(prefix + 'fine')) {
      message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if (message.content.startsWith(prefix + ' ')) {
      message.channel.sendMessage('you didn\'t type anything :expressionless:');
  }
  else if (message.content.startsWith(prefix + '')) {
      message.channel.sendMessage('');
  }
});



bot.login('MjQ3OTAwMDYzOTA3NTc3ODU2.Cw1Gyw.Jl07wEWLioc9EUkwEUES42L-ZMA');
