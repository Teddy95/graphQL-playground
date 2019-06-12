var { getPages, getPageByArgument } = require('../objects/page')

module.exports = {
	Query: {
		allPages() {
			return getPages()
		},
		page(parent, args, context, info) {
			return getPageByArgument(args)
		}
	}
}
