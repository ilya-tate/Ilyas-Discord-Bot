const Commando = require('discord.js-commando');

module.exports = class extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'eightball',
      aliases: [
        '8',
        '8ball',
        '8-ball',
        'eight',
        'eight-ball'
      ],
			group: 'stupid',
			memberName: 'eightball',
			description: 'Asks the magic 8-ball',
			args: [
				{
					key: 'args',
					prompt: 'You didn\'t ask me anything, please try again',
					type: 'string'
				}
			]
		});
	}

	async run(message, args) {
		const responses = [
      'Yes',
      'No',
      'Maybe',
			'I don\'t know',
      'Never in your fucking life',
      'lol no',
			'Error 404, answer not found',
      'If you say so',
      'Ask again later',
			'Signs point to yes',
      'You may rely on it',
			'You don\'t want to know the answer',
			'I won\'t answer that',
			'Without a doubt',
      '100% yes',
      'Depends',
      'Good question',
      'Try again',
      'Try again later',
      'Outlook is good',
      'No shot',
			'I am unsure',
			'The future is up to you',
      'It is possible',
			'They won\'t let me tell you that answer',
			'Yeah',
      'Nope'
    ];

		if (args) {
			message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
    }
  }
};
