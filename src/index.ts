import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";

import typeDefs from "./graphql/schema/typeDefs";
import resolver from "./graphql/resolvers/resolver";
import { port } from "./utils/config";

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
