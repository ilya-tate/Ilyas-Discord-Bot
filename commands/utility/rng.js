const Commando = require('discord.js-commando');

module.exports = class extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'rng',
			group: 'utility',
			memberName: 'rng',
			description: 'Generates a random number',
			args: [
				{
					key: 'args',
					prompt: 'You need to enter a min and max number Ex: 1 10',
					type: 'string'
				}
			]
		});
	}

	async run(message, args) {
		args = args['args'].split(' ')
    message.channel.send(Math.floor(Math.random() * (+args[1] + 1 - +args[0])) + +args[0]);
  }
};
