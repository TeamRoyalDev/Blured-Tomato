module.exports.run = async (bot, message, args) => {
    let user = message.author;
    
    user.send("🔗 MCM: https://www.mc-market.org/members/97550/");
}

module.exports.help = {
    name: "mcm"
}
