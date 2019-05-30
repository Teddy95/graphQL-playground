var mysql = require('mysql')

const getUser = () => {
	return new Promise((resolve, reject) => {
		// Create MySQL Connection
		var con = mysql.createConnection({
		  host: "127.0.0.1",
		  user: "root",
		  password: "password",
		  database: "magic"
		})

		var sql = "SELECT * FROM `dbprefix_users`"

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

const getUserById = (args) => {
	return new Promise((resolve, reject) => {
		// Create MySQL Connection
		var con = mysql.createConnection({
		  host: "127.0.0.1",
		  user: "root",
		  password: "password",
		  database: "magic"
		})

		var sql = "SELECT * FROM `dbprefix_users` where "
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

module.exports = { getUser, getUserById }
