var { buildSchema } = require('graphql')

const Schema = buildSchema(`
    type Query {
        authToken(name: String!, password: String!): String!
        config: Config!
        allUser: [User]
        user(id: ID, name: String, email: String): User
        allMedia: [Media]
        media(id: ID!): Media
    }

    type Config {
        title: String!
        description: String
        keywords: [String]
        email: String!
        visitorUsergroup: Usergroup!
        memberUsergroup: Usergroup!
        timezone: String!
        dateFormat: String!
        timeFormat: String!
        robots: String!
        cookieInfo: Boolean!
        cookieMessage: String
        cookieOkText: String
        cookieMoreInfo: Boolean!
        cookieMoreInfoTxt: String
    }

    type User {
        id: ID!
        name: String!
        email: String!
        image: Media
        usergroups: [Usergroup!]
    }

    type Usergroup {
        id: ID!
        name: String!
    }

    type Media {
        id: ID!
        title: String
        file: String!
        mimetype: String!
    }
`)

module.exports = { Schema }
