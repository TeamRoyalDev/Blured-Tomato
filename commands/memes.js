const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");
let cooldown = new Set();

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});


	
var codes = ["EDsZott", "1r9Sre9", "Fm5dyoq", "yp6U7e0", "S3sEFt8","oWQgGcJ","EuzNodX","xF9gfTQ","cJC8le4","NhZVYji", "uXRjU2D", "2bK3yQ6",
	     "9HojAvB", "zvTIc8v", "1ovSWO6", "YKMTp7c", "QVUfgYN", "OZtermd", "qOGNqwD", "uLuQYQH", "MnCLOz6", "gXPztQr", "lgkEHWg"];
var memes = ["Sorry Tilted gotta choose Dusty", "Season 4 Coming Clutch.", "Me: _finally eliminated my opponent with 13 health remaining_\nJohn Wick:", "Thats why i have alot of shoes in my locker.", "Back in the old days.", 
"Epicgames staff is so nice.", "Being an idiot is now a talent", "That's why I don't have a girlfriend", "Got 999 Wood Anybody need a house ?", "Oh boy!", "Rip those boobs", "That's my luck.", "When you think its gonne be an easy kill.","When you run to the bathroom between games and hear the battle bus horn go off"
	    , "Remember the girl from lazy town? This is her now, feel old yet?", "Gods plan", "When you peek your head out of a base and get sniped"
	    , "Vaulted", "Tag someone who would unlock this Snapchat trophy :joy:", "These are the facts", "Fax", "When your homie dies in duos.", "When there are 5 peoples left in the circle"];

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        var r = Math.floor(Math.random() * (codes.length));	
        let pic = codes[r];	
        let meme = memes[r];
        let channel = message.channel;
        
            let embedMsg = new Discord.RichEmbed()
            .setAuthor(`${meme}`, "https://imgur.com/tg2dtMY.png")
            .setColor(0x00AE86)
            .setImage(`https://imgur.com/${pic}.jpg`);
            
            message.delete();
            channel.send(embedMsg);
    }
else if(message.content.startsWith("b!memes") && (!message.member.hasPermission("ADMINISTRATOR") && (!cooldown.has(message.author.id)))) {
    var r = Math.floor(Math.random() * (codes.length));	
let pic = codes[r];	
let meme = memes[r];
let channel = message.channel;

    let embedMsg = new Discord.RichEmbed()
    .setAuthor(`${meme}`, "https://imgur.com/tg2dtMY.png")
    .setColor(0x00AE86)
    .setImage(`https://imgur.com/${pic}.jpg`);
    
    message.delete();
    channel.send(embedMsg);

    cooldown.add(message.author.id);
    
    setTimeout(function() {
        cooldown.delete(message.author.id);
    }, 5 * 1000);
} else {
    message.reply("Chill you are sending too many messages.");
}
}


module.exports.help = {
    name: "memes"
}
