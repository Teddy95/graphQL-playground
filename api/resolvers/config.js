module.exports = {
	Query: {
		config() {
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
		}
	}
}
