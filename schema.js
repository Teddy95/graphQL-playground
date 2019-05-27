var { buildSchema } = require('graphql')

const Schema = buildSchema(`
    type Query {
        quoteOfTheDay: String
        random: Float!
        rollThreeDice: [Int]
    }
`)

module.exports = { Schema }
