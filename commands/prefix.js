const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) =>{

    if(!message.member.hasPermission("MANAGE_sERVER")) return message.reply("No permissions");
    if(!args[0] || args[0 == "helpme"]) return message.repl("Usage: b!prefix <prefix you want>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.richEmbed()
    .setColor("#db0000")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`);
    
    message.channel(sEmbed);

}

module.exports.help = {
    name: "prefix"
}
