//this code gets discord.js
const Discord = require('discord.js');
//this one makes a shortcut to the client
const bot = new Discord.Client();
//const connect = require('../structures/VoiceChannel');
//this gives me a message when the bot boots
bot.on('ready', () => {
  console.log('私は生きている!!!');
});

//this is what is put before the word so the bot know when to respond
const prefix = ".";

var items = [
  'https://www.youtube.com/watch?v=YtEhX7mhDJc',
  'https://www.youtube.com/watch?v=5PdXIHGvMpk',
  'https://www.youtube.com/watch?v=voQ38Pvw3Rc',
  'https://cdn.discordapp.com/attachments/168173696433782784/242868911475785729/Jk53KiJ.png',
  'https://cdn.discordapp.com/attachments/168173696433782784/242836405179514880/5924519_1bd7b67fd49e1c541bf94a6cb2d996c7.jpg',
  'https://www.youtube.com/watch?v=zdU635esPpQ&list=FLRlHHR_pGSJpXRaThY5_p0g&index=14',
  'https://www.youtube.com/watch?v=YSDTPPM9qsc',
  'https://giphy.com/gifs/quentin-tarantino-pulp-fiction-vincent-vega-3o7aTskHEUdgCQAXde',
  'https://cdn.discordapp.com/attachments/200801929775939584/238508692318715904/5689d6388f5a5.jpg',
  'https://cdn.discordapp.com/attachments/197522844136112128/240974340076601344/spiderjoubu.jpg',
  'https://www.youtube.com/watch?v=3rnFlQAvk8U',
  'https://pbs.twimg.com/media/CaQOhYKVIAAOV99.jpg',
  'https://pbs.twimg.com/media/CaQOhYKUAAA-Mn3.jpg',
  'https://pbs.twimg.com/media/Cv8pSI2WAAACZ9y.jpg',
  'http://cdn1-www.dogtime.com/assets/uploads/gallery/45-funny-dog-memes/cute-funny-dog-meme-20.jpg'
];
var item = items[Math.floor(Math.random() * items.length)];
//when you type message a thing will happen
bot.on('message', message => {
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  //this is if the message dosnt have the prefix
  if(!message.content.startsWith(prefix)) return;

//and the memes start :^)
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('Command List:\n- ty1   - crabman\n- fire   - fine\n- daijo - kms\n - ???');
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
  // I want the bot to join a call lobby before playing the video
  // right now its just posting a link to a video I wnt her to play it!!!
  else if (message.content.startsWith(prefix + 'crabman')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=voQ38Pvw3Rc');
  }
  else if (message.content.startsWith(prefix + 'fine')) {
      message.channel.sendMessage('https://www.youtube.com/watch?v=5PdXIHGvMpk');
  }
  else if (message.content.startsWith(prefix + '???')) {
    message.channel.sendMessage(item);
  }


  //I dont know if there is a better way to do this maybe
  //- I can have all the commands in there own .js file?
});



bot.login('MjQ3OTAwMDYzOTA3NTc3ODU2.Cw1Gyw.Jl07wEWLioc9EUkwEUES42L-ZMA');
