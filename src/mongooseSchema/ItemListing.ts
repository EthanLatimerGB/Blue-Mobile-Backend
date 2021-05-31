import { prop, getModelForClass } from "@typegoose/typegoose";

class ImageLinksClass {
	@prop()
	public altText!: string;

	@prop()
	public url!: string;
}

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
	public NFC!: boolean

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
	@prop({ required: true })
	public name!: string;

	@prop({ required: true })
	public brand!: string;

	@prop()
	public imageLinks?: ImageLinksClass;

	@prop()
	public comments?: CommentsClass;

	@prop({ required: true })
	public stockLevel!: number;

	@prop({ required: true })
	public specification!: SpecificationClass;

	@prop({ type: () => [StorageOptionsClass], required: true })
	public storageOptions!: StorageOptionsClass[];

	@prop({ required: true })
	public description!: string;
}

const ItemListing = getModelForClass(ItemClass);

export default ItemListing;
