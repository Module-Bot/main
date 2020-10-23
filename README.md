# module-bot
Hey! Welcome to Module Bot! Module Bot is an amazingly easy way to create your own Discord.JS bots! This repository is the root, essentials for making a bot using Module Bot. Every file in the repos is absolutely required. I'll quickly go over what all the files are:
### main.js
Main.js is the main hub of the code. Think of it not like a piece of code, but a manager for all the other bits of code. Technically, when we start the bot, it just starts this program running, then this program fires all the other files at the correct time.
### package.json
Package.json basically tells Node.JS what this project is, and where to start. You can put your own project name and version number in, but it doesn't really matter. The important bit is the bit labelled Main and the dependancies. When we add a new dependancy it should sort itself out. It is a very essential file, but if you don't know what it is you don't need to worry.
### config.json
The Config file is to configure your bot. In coding, we talk about Hardcoding, where all the values are deep within the script, making it hard to change, so instead of hardcoding it, we have this file, that is easy to change, and where a program requires a value, rather than telling it the value, we just point at config.json
### commands/
This is the folder where all your commands will be, as the name suggests. Say we created a new file in the commands folder, we wouldn't have to tell main.js, it would notice by itself. All commands should always be in the commands folder, never put the code for a command in main.js.
### include/
The include folder is for scripts we need to run every so often, but aren't commands. For example, if we wanted a piece of code to run when we add a reaction, we want it in one of the subfolders, but it isn't a command, so we put it here instead.

## Installing

