import ItemListing from "../../mongooseSchema/ItemListing";
import { IItemListing } from "../../TS/interfaces/dbInterfaces";

const rootResolver = {
	Query: {
		ping: (): string => {
			return "pong";
		},
		listAllProducts: async (): Promise<IItemListing[]> => {
			const products = await ItemListing.find({});
			return products;
		},
		listNumberOfProducts: async (): Promise<number> => {
			let productCount = 0;
			const products = await ItemListing.find({});
			products.map(() => {
				productCount += 1;
			});

			return productCount;
		},
	},
};

export default rootResolver;
