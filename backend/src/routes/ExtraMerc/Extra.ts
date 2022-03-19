import { Schema, model } from 'mongoose';

const extraSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		qty: {
			type: Number,
			required: true,
			trim: true,
		},
		priceBuy: {
			type: Number,
			trim: true,
		},
		priceSell: {
			type: Number,
			trim: true,
		},
		buy: Number,
	},
	{
		versionKey: false, //   versionKey: false,  quita el key de cada elemante
		timestamps: true, //    timestamps: true,  crea una fecha de creacion y una fecha de update
	}
);

export default model('ExtraMerc', extraSchema);
