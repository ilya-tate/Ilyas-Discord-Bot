// Modules and stuff
const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

// Default client as Commando
const client = new Commando.Client({
	commandPrefix: config.prefix,
	owner: config.developers,
  unknownCommandResponse: config.unknownCommandResponse
});

// Discord client
const discordClient = new Discord.Client();

client.registry
	.registerDefaultTypes()
  .registerGroups([
    ['general'],
    ['dev'],
    ['utility'],
    ['stupid']
  ])
	.registerDefaultGroups()
	.registerCommandsIn(path.join(__dirname, "commands"));

// Run on startup
client.once('ready', () => {
  console.log(`Started Bot: ${client.user.tag} ${client.user.id}`);
  client.user.setActivity(config.status);
});

client.on('guildCreate', () => {
  console.log(`Joined Guild: `);
});

client.on('guildDelete', () => {
  console.log(`Left Guild: `);
})


client.login(config.token); // Last line