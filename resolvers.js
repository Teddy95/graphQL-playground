const RootResolver = {
	quoteOfTheDay: () => {
		return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
	},
	random: () => {
		return Math.random();
	},
	rollThreeDice: () => {
		return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
	},
	rollDice: (args) => {
		var output = []

		for (var i = 0; i < args.numDice; i++) {
			output.push(1 + Math.floor(Math.random() * (args.numSides || 6)))
		}

		return output
	}
}

module.exports = { RootResolver }
