var db = require('../../scripts/db')
var { getUserByArgument } = require('./user')

const getPages = async () => {
	var sql = "SELECT * FROM `" + db.prefix + "pages`"

	try {
		var result = await db.pool.query(sql)
		var output = []

		result.forEach(row => {
			outputRecord = {
				id: row.id,
				slug: row.slug,
				title: row.title,
				author: null,
				tags: []
			}

			outputRecord.author = getUserByArgument({ id: row.author })
			output.push(outputRecord)
		})

		return output
	} catch (err) {
		throw new Error(err)
	}
}

const getPageByArgument = async (args) => {
	var sql = "SELECT * FROM `" + db.prefix + "pages` where "
	var params = []

	if (typeof args.id !== 'undefined') {
		sql += "`id` = ?"
		params.push(args.id)
	} else if (typeof args.slug !== 'undefined') {
		sql += "`slug` = ?"
		params.push(args.slug)
	}

	try {
		var result = await db.pool.query(sql, params)
		var output = []

		result.forEach(row => {
			outputRecord = {
				id: row.id,
				slug: row.slug,
				title: row.title,
				author: null,
				tags: []
			}

			outputRecord.author = getUserByArgument({ id: row.author })
			output.push(outputRecord)
		})

		return output[0]
	} catch (err) {
		throw new Error(err)
	}
}

module.exports = { getPages, getPageByArgument }
