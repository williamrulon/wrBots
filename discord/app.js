const Discord = require('discord.js');
const items = require('./items.json');
const bot = new Discord.Client();
bot.on('ready', () => {
  console.log('私は生きている!!!');
});
bot.on('message', message => {
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  //this is if the message dont have the items.prefix
  if(!message.content.startsWith(items.prefix)) return;

  if (message.content.startsWith(items.prefix + 'help')) {
    message.channel.sendMessage('Command List:\n- crabman  - daijo\n- ethan   - fire\n- fine  - kermit\n-   - nice\n- nope  - fall\n- waifu  - ???');
  }
  else if (message.content.startsWith(items.prefix + 'fire')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  else if (message.content.startsWith(items.prefix + 'daijo')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  // I want the bot to join a call lobby before playing the video
  // right now its just posting a link to a video I wnt her to play it!!!
  else if (message.content.startsWith(items.prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if (message.content.startsWith(items.prefix + 'fine')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if (message.content.startsWith(items.prefix + 'ethan')){
    message.channel.sendMessage('https://www.youtube.com/watch?v=APxndget9l4')
  }
  else if (message.content.startsWith(items.prefix + 'play')) {
    let modRole = message.guild.roles.find('name', 'DJ');
    if(message.member.roles.has(modRole.id)) {
      message.channel.sendMessage('K boss');
    } else {
      message.reply("You do not have the right role to perform this operation");
    }
  }
  //end of music commands
  else if (message.content.startsWith(items.prefix + '???')) {
    let item = items.items[Math.floor(Math.random() * items.items.length)];
    message.channel.sendMessage(item);
  }
  else if (message.content.startsWith(items.prefix + 'kermit')) {
    let item = items.kermit[Math.floor(Math.random() * items.kermit.length)];
    message.channel.sendMessage(item);
  }
  else if (message.content.startsWith(items.prefix + 'nope')) {
    let item = items.nope[Math.floor(Math.random() * items.nope.length)];
    message.channel.sendMessage(item);
  }
  else if (message.content.startsWith(items.prefix + 'waifu')) {
    let item = items.waifu[Math.floor(Math.random() * items.waifu.length)];
    message.channel.sendMessage(item);
  }
  else if (message.content.startsWith(items.prefix + 'nice')) {
    message.channel.sendMessage('https://giphy.com/gifs/neonmob-nice-hearts-be-d2YYadXMVk6KhVBe');
  }
  else if (message.content.startsWith(items.prefix + 'fall')) {
    message.channel.sendMessage('https://i.makeagif.com/media/10-24-2015/f46awt.gif');
  }
  else if (message.content.startsWith(items.prefix + 'chilldino')) {
    message.channel.sendMessage('https://www.youtube.com/playlist?list=PLFA067CBE79DBE316');
  }

}); // End message handeller
bot.login(items.token);
//DaijoBot-^ WrBot-v
//bot.login('MjM1NTQ2MzQwMDg2NjQ0NzM4.Cyf4zw.YVN5OTiOJdyo2iB7M-MWb1gh3CA');
