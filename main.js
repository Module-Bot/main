//Import all the requirements
const Discord = require('discord.js');
const { TOKEN, PREFIX } = require('./config.json');
const client = new Discord.Client();
const fs = require("fs");

//Next import all the commands from the commands folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
client.queue = new Map();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Log to the console when the bot comes online
client.on('ready', () => {
    console.log("Bot ready!");
    client.user.setActivity('$!help', { type: 'WATCHING' });
});


client.on('message', message => {
    //Check it starts with prefix, it isn't in a DM and it isn't another bot saying it
    if (!message.content.startsWith(PREFIX)) return;
    if (!message.guild) return;
    if (message.author.bot) return;
    
    //Get an array of arguments
    const args = message.content.slice(tributeFile.PREFIX.length).split(/ +/);
    //Find the correct command
    const commandName = args.shift().toLowerCase();
    const command =
        client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    //Fire the command
    try {
        command.execute(message, args);
    } catch {
        message.reply("There was an error executing that command.");
    }
});





client.login(TOKEN);