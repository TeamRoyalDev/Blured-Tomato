const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});



module.exports.run = async (bot, message, args) => {
var r = Math.floor(Math.random() * (codes.length));
let channel = message.channel;
var r = Math.floor(Math.random() * length);
var codes = ["EDsZott", "1r9Sre9", "Fm5dyoq", "yp6U7e0", "S3sEFt8","oWQgGcJ","EuzNodX","xF9gfTQ","cJC8le4","NhZVYji", "uXRjU2D", "2bK3yQ6", "TCg5ado"];
let pic = codes[r];	
let embedMsg = new Discord.RichEmbed()
.setAuthor("test1")
.setImage(`https://imgur.com/${pic}.jpg`);

channel.send(embedMsg);

}



module.exports.help = {
    name: "memes"
}
