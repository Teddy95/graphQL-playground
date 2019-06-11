var fs = require("fs")
var db = fs.readFileSync("./config/db.json")
module.exports = JSON.parse(db)
