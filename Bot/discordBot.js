var Discord = require("discord.js");

bot = new Discord.client();

bot.on("message", function(message){
  if (message.content === "hi"){
    bot.reply(message, "Hey there!");
  }
});

bot.loginWithToken("");
