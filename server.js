var express = require('express')
var graphqlHTTP = require('express-graphql')
var { importSchema } = require('graphql-import')
var { buildSchema } = require('graphql')
var gmr = require('graphql-merge-resolvers')
var { RootResolver } = require('./rootResolver')

var typeDefs = importSchema('./schema.graphql')
var schema = buildSchema(typeDefs)
var resolvers = []

resolvers.push(require('./api/resolvers/auth.js'))
resolvers.push(require('./api/resolvers/config.js'))
resolvers.push(require('./api/resolvers/user.js'))

var resolver = gmr.merge(resolvers)

console.log(resolver)
console.log(RootResolver)

var app = express()

function loggingMiddleware (req, res, next) {
	next()
}

app.use(loggingMiddleware)
app.use('/api', graphqlHTTP({
	schema: schema,
	rootValue: resolver,
	graphiql: true,
}));

app.listen(8080)

console.log('Running a GraphQL API server at localhost:8080/api')
