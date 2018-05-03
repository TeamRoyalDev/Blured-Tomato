const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.reply("No permissions to execute this command.");
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let channel = message.channel;
        
        let bicon = bot.user.displayavatarURL;
        let vouchembed = new Discord.RichEmbed()
        .setAuthor("༺▬▬ ❰ VOUCH ❱ ▬▬༻")
        .setThumbnail(bicon)
        .setColor("#e44444")
        .addField("Here is my Profile if u are able to leave a Vouch. Have a good day!", "https://www.mc-market.org/members/97550/")
        .setFooter("༺▬▬ ❰ VOUCH ❱ ▬▬༻");
      
        return message.channel.send(vouchembed);
            
            message.delete();
            channel.send(vouchembed);
    }
}

module.exports.help = {
    name: "vouch"
}
