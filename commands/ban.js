const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permissions!");
  if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("That person can't be kicked!");
  
  message.channel.send("ez bye");
}

module.exports.help = {
  name:"ban"
}
