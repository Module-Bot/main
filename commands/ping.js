module.exports = {
    name: "ping",
    aliases: ["hello", "online?"],
    description: "Basic ping command",
    async execute(message, args) {
        message.channel.send('Pong! Ping time: `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
}