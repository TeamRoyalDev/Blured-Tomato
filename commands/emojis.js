const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;
    let server = message.guild;
    let user = message.member;
    
    if(user.hasPermission("MANAGE_GUILD")) {
    	if(args[0] && args[1]) {
      	server.createEmoji(args[0], args[1]);
        channel.send(`An emoji has been created by ${user.username} with the name: ${args[1]}.`);
      } else channel.send(`Insufficient arguments.\n\nUsage: b!emojis <url> <name>`);
    } else channel.send("Insufficient permissions.");
}

module.exports.help = {
    name: "emojis"
}
