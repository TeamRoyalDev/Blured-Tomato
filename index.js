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
  bot.user.setActivity(">Help | mans not hot", {type: "PLAYING"});


});

bot.on("message", async message => {


	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: botconfig.prefix
		};
	}

	let prefix = prefixes[message.guild.id].prefixes;
	console.log(prefix);
	

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let mcmCmd = prefix + "mcm";
  let setupsCmd = prefix + "setups";
  let memesCmd = prefix + "memes";
  let emojisCmd = prefix + "emojis";
  let helpCmd = prefix + "help";
  let vouchCmd = prefix + "vouch";
  let applyCmd = prefix + "apply";

if(cmd === mcmCmd | cmd === setupsCmd | cmd === memesCmd | cmd === emojisCmd | cmd === helpCmd | cmd == vouchCmd | cmd == applyCmd ) {
  	let cmdFile = bot.commands.get(cmd.slice(prefix.length));
        cmdFile.run(bot, message, args);
  }
});

bot.login(process.env.BOT_TOKEN);
