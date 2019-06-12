var { getUsers, getUserByArgument } = require('../objects/user')

module.exports = {
	Query: {
		allUsers() {
			return getUsers()
		},
		user(parent, args, context, info) {
			return getUserByArgument(args)
		}
	}
}
