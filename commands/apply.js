const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) return message.reply("You already have staff.");
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        let channel = message.channel;
        
        let bicon = bot.user.displayavatarURL;
        let applyEmbed = new Discord.RichEmbed()
        .setAuthor("༺▬▬ ❰ Apply ❱ ▬▬༻")
        .setThumbnail(bicon)
        .setColor("#e44444")
        .setDescription("https://goo.gl/forms/W7Z5ruOgjtXB4C3u1")
        .setFooter("༺▬▬ ❰ Apply ❱ ▬▬༻");
      
        return message.channel.send(applyEmbed);
            
            message.delete();
            channel.send(applyEmbed);
    }
}

module.exports.help = {
    name: "apply"
}
