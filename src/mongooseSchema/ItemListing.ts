//import { prop, getModelForClass } from "@typegoose/typegoose";
import mongoose, { Schema } from "mongoose";
import { IItemListing } from '../TS/interfaces/dbInterfaces';

const ItemSchema: Schema = new Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
	},
	brand: {
		type: String,
		required: true,
		minLength: 3,
	},
	imageLinks: {
		altText: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	comments: [
		{
			personName:  {
				type: String,
				required: true
			},
			personEmail:  {
				type: String,
				required: true
			},
			rating:  {
				type: Number,
				required: true
			},
			content:  {
				type: String,
				required: true
			},
		},
	],
	stockLevel:  {
		type: Number,
		required: true
	},
	categories: [
		{
			type: String,
			required: true,
		},
	],
	specification: {
		prodType:  {
			type: String,
			required: true
		},
		OS:  {
			type: String,
			required: true
		},
		processor:  {
			type: String,
			required: true
		},
		screenSizeInch:  {
			type: Number,
			required: false
		},
		screenRes:  {
			type: String,
			required: false
		},
		screenType:  {
			type: String,
			required: false
		},
		touchscreen:  {
			type: Boolean,
			required: true
		},
		features: [
			{
				type: String,
				required: true,
			},
		],
		wifi:  {
			type: Boolean,
			required: true
		},
		cellular:  {
			type: Boolean,
			required: true
		},
		NFC:  {
			type: Boolean,
			required: true
		},
		speakers:  {
			type: String,
			required: false
		},
		boxContents: [
			{
				type: String,
				required: true,
			},
		],
		dimensions:  {
			type: String,
			required: true
		},
		weightGrams:  {
			type: Number,
			required: true
		},
		warrantyLengthMonths:  {
			type: Number,
			required: true
		},
	},
	storageOptions: {
		price:  {
			type: String,
			required: true
		},
		storageMB: {
			type: Number,
			required: false,
		},
		memoryMB: {
			type: Number,
			required: false,
		},
	},
	description:  {
		type: String,
		required: true
	},
});

/* 

--TypeGoose Implementation

class ImageLinksClass {
	@prop()
	public altText!: string;

	@prop()
	public url!: string;
};

class CommentsClass {
	@prop()
	public personName!: string;

	@prop()
	public personEmail!: string;

	@prop()
	public rating!: number;

	@prop()
	public content!: string;
}

class SpecificationClass {
	@prop()
	public type!: string;

	@prop()
	public OS!: string;

	@prop()
	public processor!: string;

	@prop()
	public screenSizeInch!: string;

	@prop()
	public screenRes!: string;

	@prop()
	public screenType!: string;

	@prop()
	public touchscreen!: boolean;

	@prop({ type: () => [String] })
	public features!: string[];

	@prop()
	public wifi!: boolean;

	@prop()
	public cellular!: boolean;

	@prop()
	public bluetooth!: boolean;

	@prop()
	public NFC!: boolean;

	@prop({ type: () => [String] })
	public boxContents!: string[];

	@prop()
	public dimensions!: string;

	@prop()
	public weightGrams!: number;

	@prop()
	public warrantyLengthMOnths!: number;
}

class StorageOptionsClass {
	@prop()
	public price!: number;

	@prop()
	public storage?: number;

	@prop()
	public memory?: number;
}

class ItemClass {
	@prop()
	public name!: string;

	@prop()
	public brand!: string;

	@prop()
	public imageLinks?: ImageLinksClass;

	@prop()
	public comments?: CommentsClass;

	@prop()
	public stockLevel!: number;

	@prop()
	public specification!: SpecificationClass;

	@prop({ type: () => [StorageOptionsClass] })
	public storageOptions!: StorageOptionsClass[];

	@prop()
	public description!: string;
}

const ItemListing = getModelForClass(ItemClass);

*/

const ItemListing = mongoose.model<IItemListing>('ItemListing', ItemSchema);

export default ItemListing;
