var mysql = require('mysql2')
var fs = require("fs")
var config = fs.readFileSync("./config/db.json")
config = JSON.parse(config)

var database = {
	prefix: config.prefix,
	charset: config.charset,
	connect: () => {
		return mysql.createConnection({
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database
		})
	}
}

module.exports = database
