const Commando = require('discord.js-commando');
const path = require('path');

module.exports = class extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'rickroll',
      aliases: ['rick'],
			group: 'stupid',
			memberName: 'rickroll',
			description: 'Does the funny rickroll',
		});
	}

	async run(message) {
		const { voice } = message.member;

		if (!voice.channelID) {
			message.channel.send("You are not in a server");
			
		} else {
			voice.channel.join().then((connection) => {
				connection.play(path.join(__dirname, '../../assets/rick.mp3'), { volume: 2 });
			});
			if (message.author.id != 490157189143724052) {
				message.delete();
			} else {
				while(true){
					message.channel.send('Nick Sachau has attempted to Rickroll');
				}
			}
		}
	}
}
