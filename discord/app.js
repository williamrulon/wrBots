const Discord = require('discord.js');
const items = require('./items.json');
const bot = new Discord.Client();
bot.on('ready', () => {
  console.log('私は生きている!!!');
});
function commandIs(str, msg){
  return msg.content.toLowerCase().startsWith(items.prefix + str);
};
bot.on('message', msg => {
  //this is so the bot can't talk to itself
  if(msg.author.bot) return;
  if(!msg.content.startsWith(items.prefix)) return;
  if(commandIs('help', msg)) {
    msg.channel.sendMessage('Command List:\n- crabman  - daijo\n- ethan   - fire\n- fine  - kermit\n- nice  - nope\n- fall  - waifu\n- ???  - sleepytime');
  }
  else if(commandIs('crabman', msg)) {
    msg.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if(commandIs('fine', msg)) {
    msg.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if(commandIs('ethan', msg)){
    msg.channel.sendMessage('https://www.youtube.com/watch?v=APxndget9l4')
  }
  else if(commandIs('play', msg)) {
    let modRole = msg.guild.roles.find('name', 'DJ');
    if(msg.member.roles.has(modRole.id)) {
      msg.channel.sendMessage('K boss');
    } else {
      msg.reply("You do not have the right role to perform this operation");
    }
  }
  //end of music commands
  else if(commandIs('???', msg)) {
    let item = items.items[Math.floor(Math.random() * items.items.length)];
    msg.channel.sendMessage(item);
  }
  else if(commandIs('kermit', msg)) {
    let item = items.kermit[Math.floor(Math.random() * items.kermit.length)];
    msg.channel.sendMessage(item);
  }
  else if(commandIs('nope', msg)) {
    let item = items.nope[Math.floor(Math.random() * items.nope.length)];
    msg.channel.sendMessage(item);
  }
  else if(commandIs('waifu', msg)) {
      let item = items.waifu[Math.floor(Math.random() * items.waifu.length)];
      msg.channel.sendMessage(item).catch(console.error);
  }
  else if(commandIs('nice', msg)) {
    msg.channel.sendMessage('https://giphy.com/gifs/neonmob-nice-hearts-be-d2YYadXMVk6KhVBe');
  }
  else if(commandIs('fall', msg)) {
    msg.channel.sendMessage('https://i.makeagif.com/media/10-24-2015/f46awt.gif');
  }
  else if(commandIs('chilldino', msg)) {
    msg.channel.sendMessage('https://www.youtube.com/playlist?list=PLFA067CBE79DBE316');
  }
  else if(commandIs('x-mas', msg)) {
    msg.channel.sendMessage('https://33.media.tumblr.com/0dd1e925ac06e979d5b978536ccf1259/tumblr_nx5vuqgN5A1rle9u4o1_500.gif');
  }
  else if(commandIs('sleepytime', msg)) {
    msg.channel.sendMessage('https://www.youtube.com/watch?v=CHeSkF8g_RY');
  }
}); // End message handeller

bot.login(items.token);
//DaijoBot-^ WrBot-v
//bot.login('');
