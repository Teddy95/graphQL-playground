var { getUsers, getUserByArgument } = require('../objects/user')

module.exports = {
	Query: {
		allUsers() {
			return getUsers().then(value => value)
		},
		user(args) {
			return getUserByArgument(args).then(value => value[0])
		}
	}
}
