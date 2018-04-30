const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.author;
    
    user.send(`💻 Setups: https://www.mc-market.org/threads/332335/ \nPortfolio: \n1- https://discord.gg/sSbXq6y \n2- https://discord.gg/c3jvXwu \n3- https://discord.gg/NxRCTm9 \n4- https://discord.gg/S9ZzYCg  \n5- https://discord.gg/BqsBssc`);
}

module.exports.help = {
    name: "chelsea"
}
