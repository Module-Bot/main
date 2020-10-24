# module-bot
Hey! Welcome to Module Bot! Module Bot is an amazingly easy way to create your own Discord.JS bots! This repository is the root, essentials for making a bot using Module Bot. Every file in the repos is absolutely required. I'll quickly go over what all the files are:
### main.js
Main.js is the main hub of the code. Think of it not like a piece of code, but a manager for all the other bits of code. Technically, when we start the bot, it just starts this program running, then this program fires all the other files at the correct time.
### package.json
Package.json basically tells Node.JS what this project is, and where to start. You can put your own project name and version number in, but it doesn't really matter. The important bit is the bit labelled Main and the dependancies. When we add a new dependancy it should sort itself out. It is a very essential file, but if you don't know what it is you don't need to worry.
### config.json
The Config file is to configure your bot. In coding, we talk about Hardcoding, where all the values are deep within the script, making it hard to change, so instead of hardcoding it, we have this file, that is easy to change, and where a program requires a value, rather than telling it the value, we just point at config.json. For now we only need the token, but other modules may instruct you to add more variables.
### commands/
This is the folder where all your commands will be, as the name suggests. Say we created a new file in the commands folder, we wouldn't have to tell main.js, it would notice by itself. All commands should always be in the commands folder, never put the code for a command in main.js.
### include/
The include folder is for scripts we need to run every so often, but aren't commands. For example, if we wanted a piece of code to run when we add a reaction, we want it in one of the subfolders, but it isn't a command, so we put it here instead.

# Installing
To install the main repository, you can either clone it (either using the download button or on the command line), or you can make a blank repos on your machine (using 'git init .') and use git pull to download it. At this stage it doesn't matter, but when you start customizing code, you'll want to use git pull. You will need node.js, which can be installed from [here](https://nodejs.org/en/download/). Node.js is installed for your whole user when you download it, where as the other dependancies we will need are just installed in the selected folder. If you have node js, you should have NPM installed too. Open either command prompt or powershell, and navigate to the cloned repository folder. If you're on drive C but its on drive D, on command prompt, you just type "D:" and it will move to the correct disk. Then, to go inside a directory, for example from your user to your documents, use "cd document", and to move back out use "cd ../". When you're in the correct place, the only dependancy needed for the main repository is discord.js. You will almost certainly need some more, depending on what modules you add, almost all of them will require the database driver, but we can get that when we need it. On the command line, run "npm install discord.js" and it'll install. You'll see it creates a folder called node_modules. Now, when you run "node ." the bot will turn on. To stop the bot, do Control Key + C.

# Adding Modules
On the same organisation this repository is listed on. Pick a repository you like the look of and open it. If you're confused, every one has a read me, but basically there will be a commands folder, include folder, etc. Copy all the commands in the repository's command folder into your bot's command folder. If the module requires a change to main.js, there will be a file in the module called main.js, that has the changes applied to it. You will then have to update your bot's main.js, to show the change the module shows. All modules should work together okay.

# The Basics of Bot Making
In your config.json file, you'll see a field called "TOKEN". Here you need to put your Discord bot's token. You need to create a bot on the [Discord Developer Portal](https://discord.com/developers/), then create a new application. Call it what you want to call your bot. Then, click on the application, and go in the bot tab. Click create bot, give it a name and profile picture, and copy the token. Put the token in config.json. To invite the bot, go back into General Information, and copy the ID. Hop over to the [Permissions Calculator](https://discordapi.com/permissions.html), input the ID, tick the permissions you'll need (you can just tick administrator to basically allow it everything), and invite it to your server. As mentioned, 'node .' should start the bot.

# Hosting your Bot

# Get Support
If you have an issue, error or enhancement for any particular module, please open an issue on that module. If you have a feature request, question about main, or any other question/query/request, please leave an issue on this repository.
