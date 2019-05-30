var { getUser, getUserById } = require('../objects/user')
// var { getUser } = require('../objects/user')
// var { getUserById } = require('../objects/user2')

const RootResolver = {
	authToken: (args) => {
		var output = '25139c0a0f2c0200f6f1e4fe77608869841bd4e6e54d12bb6d'

		// code...

		return output
	},
	config: () => {
		var output = {
			title: 'My Magic Website!',
			description: null,
			keywords: [
				'magic',
				'cms'
			],
	        email: 'magic@andre.dev',
	        visitorUsergroup: {
				id: 3,
				name: 'Besucher'
			},
	        memberUsergroup: {
				id: 2,
				name: 'Mitglieder'
			},
	        timezone: 'Europe/Berlin',
	        dateFormat: 'd.m.Y',
	        timeFormat: 'H:i:s',
	        robots: 'noindex, nofollow',
	        cookieInfo: true,
	        cookieMessage: 'Some Cookie info...',
	        cookieOkText: 'Ok',
	        cookieMoreInfo: false,
	        cookieMoreInfoTxt: 'More Cookie info...'
		}

		return output;
	},
	allUser: () => {
		return getUser().then(value => value)
	},
	user: (args) => {
		return getUserById(args).then(value => value[0])
	},
	allMedia: () => {
		return;
	},
	media: (args) => {
		return;
	},
	allPages: () => {
		return;
	},
	page: (args) => {
		return;
	}
}

module.exports = { RootResolver }