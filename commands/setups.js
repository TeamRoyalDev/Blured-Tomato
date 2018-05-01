const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
   let setupEmbed = new Discord.RichEmbed()
  .setAuthor("Blured Setups")
  .setColor("#800080")
  .setDescription("**1** _-_ https://discord.gg/sSbXq6y\n**2** _-_ https://discord.gg/c3jvXwu\n**3** _-_ https://discord.gg/NxRCTm9\n**4** _-_ https://discord.gg/S9ZzYCg\n**5** _-_ https://discord.gg/BqsBssc")
  .setFooter("©Tomato Blured", "https://i.imgur.com/79sCH4c.png");
   
  let user = message.author;

  user.send(setupEmbed);
    
}

module.exports.help = {
    name: "setups"
}
