import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Image {
		altText: String!
		url: String!
	}

	type Comment {
		personName: String!
		personEmail: String!
		rating: Float!
		content: String!
	}

	type Specification {
		type: String!
		OS: String!
		processor: String!
		screenSizeInch: Float
		screenRes: String
		screenType: String
		touchscreen: Boolean!
		features: [String!]!
		wifi: Boolean!
		cellular: Boolean!
		bluetooth: Boolean!
		NFC: Boolean!
		speakers: String!
		boxContents: [String!]!
		dimensions: String!
		weightGrams: Int!
		warrantyLengthMonths: Int!
	}

	type StorageOptions {
		price: Float!
		storageMB: Int
		memoryMB: Int
	}

	type ItemListing {
		name: String!
		brand: String!
		images: [Image!]!
		comments: [Comment]!
		stockLevel: Int!
		categories: [String]!
		specification: Specification!
		storageOptions: [StorageOptions!]!
		description: String!
	}

	type Query {
		ping: String!,
		listAllProducts: [ItemListing],
		listNumberOfProducts: Int!,
		create: ItemListing
	}
`;

export default typeDefs;
