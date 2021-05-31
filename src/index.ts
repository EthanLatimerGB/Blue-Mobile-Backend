import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

import typeDefs from "./graphql/schema/typeDefs";
import resolver from "./graphql/resolvers/resolver";
import { port, mongoPassword } from "./utils/config";

mongoose
	.connect(
		`mongodb+srv://fullstack:${mongoPassword}@fso.rth9w.mongodb.net/BlueMobile?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log(`Successfully connected to MongoDB Atlas`);
	})
	.catch(() => {
		console.log(`Failed to connect to MongoDB Atlas`);
	});

const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers: resolver,
});

server.applyMiddleware({
	app,
	path: "/graphql",
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
