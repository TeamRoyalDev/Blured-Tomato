const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});
	
var codes = ["EDsZott", "1r9Sre9", "Fm5dyoq", "yp6U7e0", "S3sEFt8","oWQgGcJ","EuzNodX","xF9gfTQ","cJC8le4","NhZVYji", "uXRjU2D", "2bK3yQ6", "TCg5ado"];
var memes = ["Sorry Tilted gotta choose Dusty", "This is for the fox news."];

module.exports.run = async (bot, message, args) => {
var r = Math.floor(Math.random() * (codes.length));	
let pic = codes[r];	
let meme = memes[r];
let channel = message.channel;
let embedMsg = new Discord.RichEmbed()
.setAuthor(`${meme}`)
.setImage(`https://imgur.com/${pic}.jpg`);

channel.send(embedMsg);

}



module.exports.help = {
    name: "memes"
}
