var fs = require("fs")
var db = fs.readFileSync("./db.json")
module.exports = JSON.parse(db)
