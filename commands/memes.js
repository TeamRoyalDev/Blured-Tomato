const fs = require("fs");
const memesDir = "./memes";
const Discord = require("discord.js");

var length = 0;

fs.readdir(memesDir, (err, files) => {
	length = files.length;
});

module.exports.run = async (bot, message, args) => {
let channel = message.channel;
var r = Math.floor(Math.random() * length);
let embedMsg = new Discord.RichEmbed()
.setAuthor("test1")

channel.send(embedMsg);
channel.send({file: `./memes/${r}.jpg`});

}



module.exports.help = {
    name: "memes"
}
