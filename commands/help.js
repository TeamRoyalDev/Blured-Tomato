const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
   let helpEmbed = new Discord.RichEmbed()
   .setTitle("Blured Tomato | Command List")
  .setColor("#db0000")
  .addField("Commands",
    "b!memes\nb!mcm\nb!setups")
  .setFooter("©Blured Tomato", "https://i.imgur.com/79sCH4c.png");
   
  let user = message.author;

  user.send(helpEmbed);
    
}

module.exports.help = {
    name: "help"
}
