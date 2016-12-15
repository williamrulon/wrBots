const Discord = require('discord.js');
const items = require('./items.json');
const bot = new Discord.Client();
bot.on('ready', () => {
  console.log('私は生きている!!!');
});

//bot.on('');

bot.on('message', message => {
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  if(!message.content.startsWith(items.prefix)) return;
  //if(commands.hasOwnProperty(message.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[message.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](message);
  //I want the bot to join a call lobby before playing the video
  else if(message.content.startsWith(items.prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if(message.content.startsWith(items.prefix + 'fine')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if(message.content.startsWith(items.prefix + 'ethan')){
    message.channel.sendMessage('https://www.youtube.com/watch?v=APxndget9l4')
  }
  else if(message.content.startsWith(items.prefix + 'play')) {
    let modRole = message.guild.roles.find('name', 'DJ');
    if(message.member.roles.has(modRole.id)) {
      message.channel.sendMessage('K boss');
    } else {
      message.reply("You do not have the right role to perform this operation");
    }
  }
  //end of music commands
  else if(message.content.startsWith(items.prefix + 'fire')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  else if(message.content.startsWith(items.prefix + 'daijo')) {
    message.channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  else if(message.content.startsWith(items.prefix + '???')) {
    let item = items.items[Math.floor(Math.random() * items.items.length)];
    message.channel.sendMessage(item);
  }
  else if(message.content.startsWith(items.prefix + 'kermit')) {
    let item = items.kermit[Math.floor(Math.random() * items.kermit.length)];
    message.channel.sendMessage(item);
  }
  else if(message.content.startsWith(items.prefix + 'nope')) {
    let item = items.nope[Math.floor(Math.random() * items.nope.length)];
    message.channel.sendMessage(item);
  }
  else if(message.content.startsWith(items.prefix + 'waifu')) {
      let item = items.waifu[Math.floor(Math.random() * items.waifu.length)];
      message.channel.sendMessage(item).catch(console.error);
  }
  else if(message.content.startsWith(items.prefix + 'nice')) {
    message.channel.sendMessage('https://giphy.com/gifs/neonmob-nice-hearts-be-d2YYadXMVk6KhVBe');
  }
  else if(message.content.startsWith(items.prefix + 'fall')) {
    message.channel.sendMessage('https://i.makeagif.com/media/10-24-2015/f46awt.gif');
  }
  else if(message.content.startsWith(items.prefix + 'chilldino')) {
    message.channel.sendMessage('https://www.youtube.com/playlist?list=PLFA067CBE79DBE316');
  }
  else if(message.content.startsWith(items.prefix + 'x-mas')) {
    message.channel.sendMessage('https://33.media.tumblr.com/0dd1e925ac06e979d5b978536ccf1259/tumblr_nx5vuqgN5A1rle9u4o1_500.gif');
  }
  else if(message.content.startsWith(items.prefix + 'sleepytime')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=CHeSkF8g_RY');
  }


}); // End message handeller

bot.login(items.token);
//DaijoBot-^ WrBot-v
//bot.login('MjM1NTQ2MzQwMDg2NjQ0NzM4.Cyf4zw.YVN5OTiOJdyo2iB7M-MWb1gh3CA');
