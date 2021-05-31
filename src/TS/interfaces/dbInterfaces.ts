import { Document } from 'mongoose';

/*
---
Interfaces for all MongoDB Database Model Documents
--- 
*/


//ItemListing Interface Types for Mongoose

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
	storageMB?: number;
	memoryMB?: number;
};

export type SpecificaitonType = {
	prodType: string;
	OS: string;
	processor: string;
	screenSizeInch?: number;
	screenRes?: string;
	screenType?: string;
	touchscreen: boolean;
	features: Array<string>;
	wifi: boolean;
	cellular: boolean;
	bluetooth: boolean;
	NFC: boolean;
	speakers?: string;
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

export interface IItemListing extends Document, ItemListingType {};


