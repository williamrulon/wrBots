//this code gets discord.js
const Discord = require('discord.js');
//this one makes a shortcut to the client
const bot = new Discord.Client({"autoReconnect":true});
//const connect = require('../structures/VoiceChannel');

function log(level, msg){
  console.log("[" + level + "]")
}

//this gives me a message when the bot boots
bot.on('ready', () => {
  //log("INFO", "StreamBot ready for service. serving " + bot.channel.size + " channel in " bot.guilds.size + " server.");
  console.log('私は生きている!!!');
});

//this is what is put before the word so the bot know when to respond
const prefix = ".";

//when you type message a thing will happen
bot.on('message', message => {
  var content = message.content;
  var auther = message.auther;
  var channel = message.channel;
  var guild = message.guild;
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  //this is if the message dosnt have the prefix
  if(!content.startsWith(prefix)) return;

//and the memes start :^)
  if (content.startsWith(prefix + 'help')) {
    channel.sendMessage('Command List:\n- ty1   - crabman\n- fire   - fine\n- daijo\n- kms\n');
  }
  else if (content.startsWith(prefix + 'ty1')) {
    channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/243158498479833088/ty1.png');
  }
  else if (content.startsWith(prefix + 'fire')) {
    channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png');
  }
  else if (content.startsWith(prefix + 'daijo')) {
    channel.sendMessage('https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg');
  }
  else if (content.startsWith(prefix + 'kms')) {
    channel.sendMessage(': \n\n                                  ^)');
  }
  else if (content.startsWith(prefix + '')) {
    channel.sendMessage('');
  }
  // I want the bot to join a call lobby before playing the video
  // right now its just posting a link to a video I wnt her to play it!!!
  /*
  else if (message.content.startsWith(prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if (message.content.startsWith(prefix + 'fine')) {
      message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  */

  //I dont know if there is a better way to do this maybe
  //- I can have all the commands in there own .js file?
});

bot.login('MjQ3OTAwMDYzOTA3NTc3ODU2.Cw1Gyw.Jl07wEWLioc9EUkwEUES42L-ZMA');
