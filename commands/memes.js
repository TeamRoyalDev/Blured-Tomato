const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});


var codes = ["4SF7teV", "4SF7teV", "4SF7teV"];
var r = Math.floor(Math.random() * (codes.length));
let pic = codes[r];

module.exports.run = async (bot, message, args) => {
let channel = message.channel;
var r = Math.floor(Math.random() * length);
let embedMsg = new Discord.RichEmbed()
.setAuthor("test1")
.setImage(`https://imgur.com/${pic}.jpg`);

channel.send(embedMsg);

}



module.exports.help = {
    name: "memes"
}
