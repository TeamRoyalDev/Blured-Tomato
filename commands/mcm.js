const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.author;
    
    user.send(`🔗 MCM: https://www.mc-market.org/members/97550/`).catch(e => {console.log(e);});
}

module.exports.help = {
    name: "mcm"
}
