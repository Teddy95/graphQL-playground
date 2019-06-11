var db = require('../../scripts/db')
var { getUserByArgument } = require('./user')

const getPages = () => {
	return new Promise((resolve, reject) => {
		// Create MySQL Connection
		var con = db.connect()

		var sql = "SELECT * FROM `" + db.prefix + "pages`"

		con.query(sql, (err, result, fields) => {
			var output = []
			if (err) reject(err)

			result.forEach(row => {
				var outputRecord = {
					id: row.id,
					slug: row.slug,
					title: row.title,
					author: null,
					tags: []
				}

				getUserByArgument({ id: row.author }).then(value => {
					outputRecord.author = value[0]
				})

				output.push(outputRecord)
				console.log(outputRecord)
			})

			console.log(output)

			resolve(output)
		})

		con.end()
	})
}

const getPageByArgument = (args) => {
	// return new Promise((resolve, reject) => {
	// 	// Create MySQL Connection
	// 	var con = mysql.createConnection({
	// 		host: db.host,
	// 		user: db.user,
	// 		password: db.password,
	// 		database: db.database
	// 	})
	//
	// 	var sql = "SELECT * FROM `dbprefix_users` where "
	// 	var params = []
	//
	// 	if (typeof args.id !== 'undefined') {
	// 		sql += "`id` = ?"
	// 		params.push(args.id)
	// 	} else if (typeof args.name !== 'undefined') {
	// 		sql += "`username` = ?"
	// 		params.push(args.name)
	// 	} else if (typeof args.email !== 'undefined') {
	// 		sql += "`email` = ?"
	// 		params.push(args.email)
	// 	}
	//
	// 	con.query(sql, params, (err, result, fields) => {
	// 		var output = []
	// 		if (err) reject(err)
	//
	// 		result.forEach(row => {
	// 			output.push({
	// 				id: row.id,
	// 				name: row.username,
	// 				email: row.email,
	// 				image: null,
	// 				usergroup: {
	// 					id: row.usergroup,
	// 					name: 'LoremIpsum'
	// 				}
	// 			})
	// 		})
	//
	// 		resolve(output)
	// 	})
	//
	// 	con.end()
	// })
}

module.exports = { getPages, getPageByArgument }
