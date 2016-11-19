/this code gets discord.js
const Discord = require('discord.js');
//this one makes a shortcut to the client
const bot = new Discord.Client({"autoReconnect":true});
//const connect = require('../structures/VoiceChannel');

function log(level, msg){
  console.log("[" + level + "]")
}

//this gives me a message when the bot boots
bot.on('ready', function() {
  log("INFO", "StreamBot ready for service. serving " + bot.channel.size + " channel in " bot.guilds.size + " server.");
});

var commands = {};

//when you type message a thing will happen
bot.on('message', message => {
  var content = message.content;
  var author = message.author;
  var channel = message.channel;
  var guild = message.guild;
  //this is so the bot can't talk to itself
  if(message.author.bot) return;
  //this is if the message dosnt have the prefix
  if(!content.startsWith(prefix)) return;

});

bot.on("guildCreate", guildCreate => {

});

bot.on("guildDelete", guildDelete => {

});



bot.login('MjQ3OTAwMDYzOTA3NTc3ODU2.Cw1Gyw.Jl07wEWLioc9EUkwEUES42L-ZMA');
