const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let mcmembed = new Discord.RichEmbed()
  .setDescription("MCM Link")
  .setColor("#930000")
  .addField("LINK >", "https://www.mc-market.org/members/97550/", true);

  return message.channel.send(mcmembed);
}

module.exports.help = {
  name:"mcm"
}
