const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
      if (message.member.hasPermission("ADMINSTRATOR")) {
        var r = Math.floor(Math.random() * (codes.length));	
        let pic = codes[r];	
        let meme = memes[r];
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
            channel.send(embedMsg);
    }
}

module.exports.help = {
  name:"vouch"
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No permissions to execute this command.");
    if (message.member.hasPermission("MANAGE_SERVER")) {
        var r = Math.floor(Math.random() * (codes.length));	
        let pic = codes[r];	
        let meme = memes[r];
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
            channel.send(embedMsg);
    }
}

module.exports.help = {
    name: "vouch"
}
