const Commando = require('discord.js-commando');
const { developers } = require('../../config.json');

module.exports = class extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'ppcalc',
      aliases: [
        'pp',
        'calcpp',
        'penis',
        'calcpenis',
        'peniscalc'
      ],
			group: 'stupid',
			memberName: 'ppcalc',
			description: 'Calculates PP size'
		});
	}

	async run(message) {
    function calcPp (min, max) {
      let ppSize = Math.floor(Math.random() * (max - min)) + min;
      for (let i = 1; i <= ppSize; i++) {
        ppString += '=';
      }
      console.log(ppSize);
    }

    let ppString = '8';

    const smallPps = [490157189143724052, 351056194913304577, 580433000018346005];

    if (smallPps.includes(message.author.id)) {
      // Unforunate fellows
			calcPp(0, 3);
		} else if (developers.includes(message.author.id)) {
      // Kool Kids  
      calcPp(12, 24);
    } else {
      // Anyone else
      calcPp(0, 12);
    }
    message.reply(`PP: ${ppString}D`);
	}
};