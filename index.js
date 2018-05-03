const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let cooldown = new Set();
let cdseconds = 5;

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find any commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} has been loaded successfully!`);
    bot.commands.set(props.help.name, props);

  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} has successfully started. Made By Chelsea & Death.`);
  bot.user.setActivity("Blured | b!Help", {type: "PLAYING"});


});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let mcmCmd = prefix + "mcm";
  let setupsCmd = prefix + "setups";
  let memesCmd = prefix + "memes";
  let emojisCmd = prefix + "emojis";
  let helpCmd = prefix + "help";

if(cmd === mcmCmd | cmd === setupsCmd | cmd === memesCmd | cmd === emojisCmd | cmd === helpCmd) {
  	let cmdFile = bot.commands.get(cmd.slice(prefix.length));
        cmdFile.run(bot, message, args);
  }
var codes = ["EDsZott", "1r9Sre9", "Fm5dyoq", "yp6U7e0", "S3sEFt8","oWQgGcJ","EuzNodX","xF9gfTQ","cJC8le4","NhZVYji", "uXRjU2D", "2bK3yQ6",
         "9HojAvB", "zvTIc8v", "1ovSWO6", "YKMTp7c", "QVUfgYN", "OZtermd", "qOGNqwD", "uLuQYQH", "MnCLOz6", "gXPztQr", "lgkEHWg"];
var memes = ["Sorry Tilted gotta choose Dusty", "Season 4 Coming Clutch.", "Me: _finally eliminated my opponent with 13 health remaining_\nJohn Wick:", "Thats why i have alot of shoes in my locker.", "Back in the old days.", 
"Epicgames staff is so nice.", "Being an idiot is now a talent", "That's why I don't have a girlfriend", "Got 999 Wood Anybody need a house ?", "Oh boy!", "Rip those boobs", "That's my luck.", "When you think its gonne be an easy kill.","When you run to the bathroom between games and hear the battle bus horn go off"
        , "Remember the girl from lazy town? This is her now, feel old yet?", "Gods plan", "When you peek your head out of a base and get sniped"
        , "Vaulted", "Tag someone who would unlock this Snapchat trophy :joy:", "These are the facts", "Fax", "When your homie dies in duos.", "When there are 5 peoples left in the circle"];

if (cmd.startsWith("b!")) {
if(cooldown.has(message.author.id)){
    message.delete();
    message.reply("Chill you are sending too many messages.")
}
if(!message.member.hasPermission("ADMINSTRATOR")){
    cooldown.add(message.author.id);
}    
var r = Math.floor(Math.random() * (codes.length));    
let pic = codes[r];    
let meme = memes[r];
let channel = message.channel;
let embedMsg = new Discord.RichEmbed()
.setAuthor(`${meme}`, "https://imgur.com/tg2dtMY.png")
.setColor(0x00AE86)
.setImage(`https://imgur.com/${pic}.jpg`);

channel.send(embedMsg);


setTimeout(() => {
    cooldown.delete(message.author.id)
}, cdseconds * 1000)
}
});

bot.login(process.env.BOT_TOKEN);
