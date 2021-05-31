export type ImageType = {
	altText: string;
	url: string;
};

export type CommentType = {
	personName: string;
	personEmail: string;
	rating: number;
	content: string;
};

export type StorageOptionsType = {
	price: number;
	storage?: number;
	memory?: number;
};

export type SpecificaitonType = {
	type: string;
	OS: string;
	processor: string;
	screenSizeInch: number;
	screenRes: string;
	screenType: string;
	touchscreen: boolean;
	features: Array<string>;
	wifi: boolean;
	cellular: boolean;
	bluetooth: boolean;
	NFC: boolean;
	speakers: string;
	boxContents: Array<string>;
	dimensions: string;
	weightGrams: number;
	warrantyLengthMonths: number;
};

export interface ItemListingType {
	name: string;
	brand: string;
	imageLinks: ImageType;
	comments: CommentType;
	stockLevel: number;
	categories: Array<string>;
	specificaiton: SpecificaitonType;
	storageOptions: StorageOptionsType;
	description: string;
}
