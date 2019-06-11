var { ApolloServer } = require('apollo-server-express')
var { importSchema } = require('graphql-import')
var express = require('express')
var gmr = require('graphql-merge-resolvers')

var typeDefs = importSchema('./schema.graphql')
var resolvers = []

resolvers.push(require('./api/resolvers/auth.js'))
resolvers.push(require('./api/resolvers/config.js'))
resolvers.push(require('./api/resolvers/page.js'))
resolvers.push(require('./api/resolvers/user.js'))

var resolver = gmr.merge(resolvers)
console.log(resolver)

var app = express()

function loggingMiddleware (req, res, next) {
	next()
}

app.use(loggingMiddleware)

var server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolver,
	introspection: true,
	playground: true,
	debug: true
})

var path = '/api'
server.applyMiddleware({ app, path })

app.listen(8080)

console.log('Running an Apollo GraphQL API server at localhost:8080/api')
