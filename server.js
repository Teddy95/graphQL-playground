var express = require('express')
var graphqlHTTP = require('express-graphql')
var { Schema } = require('./schema')
var { RootResolver } = require('./resolvers')

var app = express();

function loggingMiddleware (req, res, next) {
	next()
}

app.use(loggingMiddleware)
app.use('/api', graphqlHTTP({
	schema: Schema,
	rootValue: RootResolver,
	graphiql: true,
}));

app.listen(8080)

console.log('Running a GraphQL API server at localhost:8080/api')
