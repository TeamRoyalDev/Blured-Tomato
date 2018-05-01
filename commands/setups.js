const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
   let setupEmbed = new Discord.RichEmbed()
  .setAuthor(":computer: Setups")
  .setColor("#800080")
  .setDescription("**1** _-_ https://discord.gg/sSbXq6y")
  .setDescription("**2** _-_ https://discord.gg/c3jvXwu")
  .setDescription("**3** _-_ https://discord.gg/NxRCTm9")
  .setDescription("**4** _-_ https://discord.gg/S9ZzYCg")
  .setDescription("**5** _-_ https://discord.gg/BqsBssc");
   
  let user = message.author;

  user.send(setupEmbed);
    
}

module.exports.help = {
    name: "setups"
}
