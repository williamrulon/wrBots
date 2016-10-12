var Discord = require("discord.js");

var bot = new Discord.client();

bot.on("message", function(message){
  if (message.content === "ping"){
    bot.reply(message, "pong");
  }
});

bot.loginWithToken("MjM1NTQ2MzQwMDg2NjQ0NzM4.Ct8JJg.kK7afS9HT_bRo8tnp667MOeKl7g");
