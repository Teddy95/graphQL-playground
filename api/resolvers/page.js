var { getPages, getPageByArgument } = require('../objects/page')

module.exports = {
	Query: {
		allPages() {
			return getPages().then(value => value)
		},
		page(parent, args, context, info) {
			return getUserByArgument(args).then(value => value[0])
		}
	}
}
