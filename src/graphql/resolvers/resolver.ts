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
		create: async () => {
			const newItemListing = new ItemListing({

			});

			const savedItemListing = await newItemListing.save();
			return savedItemListing;
		}
	},
};

export default rootResolver;
