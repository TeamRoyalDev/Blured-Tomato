const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

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
    console.log(`${f} all the configs has been loaded successfully!`);
    bot.commands.set(props.help.name, props);

  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} has successfully started made by Chelsea & Death.`);
  bot.user.setActivity("Blured | b!Help", {type: "PLAYING"});


});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  var cmds = [`${prefix}mcm`, `${prefix}play`, `${prefix}skip`, `${prefix}pause`, `${prefix}resume`, `${prefix}setups`, `${prefix}prefix`, `${prefix}memes`, `${prefix}emojis`];

	if(cmds.indexOf(cmd)) {
  	let cmdFile = bot.commands.get(cmd.slice(prefix.length));
    cmdFile.run(bot, message, args);
  }

});

bot.login(process.env.BOT_TOKEN);
