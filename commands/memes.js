const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});
	
var codes = ["EDsZott", "1r9Sre9", "Fm5dyoq", "yp6U7e0", "S3sEFt8","oWQgGcJ","EuzNodX","xF9gfTQ","cJC8le4","NhZVYji", "uXRjU2D", "2bK3yQ6"];
var memes = ["Sorry Tilted gotta choose Dusty", "Season 4 Coming Clutch.", "Double Pump is back ! Hooray", "Thats why i have alot of shoes in my locker.", "Back in the old days.", 
"Epicgames staff is so nice.", "Being an idiot is now a talent", "That's why I don't have a girlfriend", "Got 999 Wood Anybody need a house ?", "Oh boy!", "Rip those boobs", "That's my luck."];

module.exports.run = async (bot, message, args) => {
var r = Math.floor(Math.random() * (codes.length));	
let pic = codes[r];	
let meme = memes[r];
let channel = message.channel;
let embedMsg = new Discord.RichEmbed()
.setAuthor(`${meme}`, "https://imgur.com/tg2dtMY.png")
.setColor("#f45151")
.setImage(`https://imgur.com/${pic}.jpg`);

channel.send(embedMsg);

}



module.exports.help = {
    name: "memes"
}
