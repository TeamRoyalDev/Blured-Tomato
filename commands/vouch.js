const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayavatarURL;
  let vouchembed = new Discord.RichEmbed()
  .setAuthor("༺▬▬ ❰ VOUCH ❱ ▬▬༻")
  .setThumbnail(bicon)
  .setColor("#e44444")
  .setDescription("Here is my Profile if u are able to leave a Vouch. Have a good day!")
  .setDescription("https://www.mc-market.org/members/97550/")
  .setDescription("༺▬▬ ❰ VOUCH ❱ ▬▬༻"");

  return message.channel.send(vouchembed);
}

module.exports.help = {
  name:"vouch"
}
