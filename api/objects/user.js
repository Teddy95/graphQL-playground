var db = require('../../scripts/db')

const getUsers = () => {
	// var output = []
	//
	// function fetchQuery (err, result, fields) {
	// 	// if (err) reject(err)
	//
	// 	result.forEach(row => {
	// 		output.push({
	// 			id: row.id,
	// 			name: row.username,
	// 			email: row.email,
	// 			image: null,
	// 			usergroup: {
	// 				id: row.usergroup,
	// 				name: 'LoremIpsum'
	// 			}
	// 		})
	// 	})
	//
	// 	// resolve(output)
	// }
	//
	// // Create MySQL Connection
	// var con = mysql.createConnection({
	// 	host: db.host,
	// 	user: db.user,
	// 	password: db.password,
	// 	database: db.database
	// })
	//
	// var sql = "SELECT * FROM `dbprefix_users`"
	//
	// con.query(sql, fetchQuery)
	//
	// con.end()
	//
	// return output

	return new Promise((resolve, reject) => {
		// Create MySQL Connection
		var con = db.connect()

		var sql = "SELECT * FROM `" + db.prefix + "users`"

		con.query(sql, (err, result, fields) => {
			var output = []
			if (err) reject(err)

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

			resolve(output)
		})

		con.end()
	})
}

const getUserByArgument = (args) => {
	return new Promise((resolve, reject) => {
		// Create MySQL Connection
		var con = db.connect()

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

		con.query(sql, params, (err, result, fields) => {
			var output = []
			if (err) reject(err)

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

			resolve(output)
		})

		con.end()
	})
}

module.exports = { getUsers, getUserByArgument }
