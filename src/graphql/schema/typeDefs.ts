import { gql, ApolloServerExpressConfig } from "apollo-server-express";
import rootResolver from "../resolvers/resolver";

const typeDefs = gql`
	type Query {
		isjakeanoob: String!
	}
`;

export default typeDefs;