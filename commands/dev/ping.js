const Commando = require('discord.js-commando');

module.exports = class ping extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'dev',
			memberName: 'ping',
			description: 'Pings bot',
		});
	}

	async run(message) {
		message.channel.send('Pong');
	}
};