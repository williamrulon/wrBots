const Discord = require('discord.js');
const items = require('./items.json');
const bot = new Discord.Client();
const prefix = ".";
bot.on('ready', () => {
  console.log('私は生きている!!!');
});

bot.on('message', message => {
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  //this is if the message dont have the prefix
  if(!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('Command List:\n- ethan   - crabman\n- fire   - fine\n- daijo  - ???');
  }
  else if (message.content.startsWith(prefix + 'fire')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  else if (message.content.startsWith(prefix + 'daijo')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  // I want the bot to join a call lobby before playing the video
  // right now its just posting a link to a video I wnt her to play it!!!
  else if (message.content.startsWith(prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if (message.content.startsWith(prefix + 'fine')) {
      message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if (message.content.startsWith(prefix + 'ethan')){
    message.channel.sendMessage('https://www.youtube.com/watch?v=APxndget9l4')
  }
  else if (message.content.startsWith(prefix + 'play')) {
    let modRole = message.guild.roles.find('name', 'DJ');
    if(message.member.roles.has(modRole.id)) {
      message.channel.sendMessage('K boss');
    } else {
      message.reply("You do not have the right role to perform this operation");
    }
  }
  //end of music commands
  else if (message.content.startsWith(prefix + '???')) {
    let item = items.items[Math.floor(Math.random() * items.items.length)];
    message.channel.sendMessage(item);
  }
}); // End message handeller

bot.login('MjQ3OTAwMDYzOTA3NTc3ODU2.Cx-ptg.yt5EqjUjUHMwmsdJFlTDh1vYpRg');
