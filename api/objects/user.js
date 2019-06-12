var db = require('../../scripts/db')

const getUsers = async () => {
	var sql = "SELECT * FROM `" + db.prefix + "users`"

	try {
		var result = await db.pool.query(sql)
		var output = []

		result.forEach(row => {
			output.push({
				id: row.id,
				name: row.username,
				email: row.email,
				image: null,
				usergroup: {
					id: row.usergroup,
					name: 'LoremIpsum'
				}
			})
		})

		return output
	} catch (err) {
		throw new Error(err)
	}
}

const getUserByArgument = async (args) => {
	var sql = "SELECT * FROM `" + db.prefix + "users` where "
	var params = []

	if (typeof args.id !== 'undefined') {
		sql += "`id` = ?"
		params.push(args.id)
	} else if (typeof args.name !== 'undefined') {
		sql += "`username` = ?"
		params.push(args.name)
	} else if (typeof args.email !== 'undefined') {
		sql += "`email` = ?"
		params.push(args.email)
	}

	try {
		var result = await db.pool.query(sql, params)
		var output = []

		result.forEach(row => {
			output.push({
				id: row.id,
				name: row.username,
				email: row.email,
				image: null,
				usergroup: {
					id: row.usergroup,
					name: 'LoremIpsum'
				}
			})
		})

		return output[0]
	} catch (err) {
		throw new Error(err)
	}
}

module.exports = { getUsers, getUserByArgument }
