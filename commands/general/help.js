const Commando = require('discord.js-commando');

module.exports = class extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'general',
			memberName: 'help',
			description: 'Displays commands',
		});
	}

	async run(message) {
    // Hardcoded lol
		message.channel.send(`\`\`\`Commands:\nhelp - Displays commands\nping - Pings bot\n8-ball <question> - Responds to question\nppcalc - Calculates your pp size\nrng <min> <max> - Gives random number between values\`\`\``);
	}
};