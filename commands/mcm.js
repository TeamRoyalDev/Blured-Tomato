const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayavatarURL;
  let mcmembed = new Discord.RichEmbed()
  .setDescription("MCM Link")
  .setThumbnail(bicon)
  .setColor("#e44444")
  .addField("LINK >", "https://www.mc-market.org/members/97550/", true);

  return message.channel.send(mcmembed);
}

module.exports.help = {
  name:"mcm"
}
