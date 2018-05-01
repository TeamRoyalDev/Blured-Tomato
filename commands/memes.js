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
   
   channel.send
   ({embed: {
  color: 3447003,
  description: "t1"
  setImage({ files: [`./memes/${r}.jpg`]})
}});
} 

module.exports.help = {
    name: "memes"
}
