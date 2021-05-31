import ItemListing from "../../mongooseSchema/ItemListing";

const rootResolver = {
	Query: {
		ping: () => {
			return "pong";
		},
		listAllProducts: async () => {
			const products = ItemListing.find({  });
			return products;
		},
		listNumberOfProducts: async () => {
			let productCount = 0;
			const products = ItemListing.find({});
			products.map(() => {
				productCount+= 1;
			})
			return productCount;
		},
		create: async () => {

		}
	},
};

export default rootResolver;
