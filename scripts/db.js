var mysql = require('mysql')
var util = require('util')
var fs = require("fs")
var config = fs.readFileSync("./config/db.json")
config = JSON.parse(config)

var pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
})

pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('Database connection was closed.')
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('Database has too many connections.')
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('Database connection was refused.')
		}
	}

	if (connection) connection.release()

	return
})

// Magic happens here
pool.query = util.promisify(pool.query)

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
	},
	pool: pool
}

module.exports = database
