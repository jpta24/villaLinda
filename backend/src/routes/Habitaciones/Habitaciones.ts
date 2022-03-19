import { Schema, model } from 'mongoose';

const habSchema = new Schema(
	{
		number: {
			type: Number,
			unique: true,
			required: true,
			trim: true,
		},
		status: {
			type: String,
			required: true,
			trim: true,
		},
		priceFraction: {
			type: Number,
			trim: true,
		},
		priceFull: {
			type: Number,
			trim: true,
		},

		hrIn: {
			type: Date,
			trim: true,
		},
		hrOut: {
			type: Date,
			trim: true,
		},
		hrMantto: {
			type: Date,
			trim: true,
		},
		timesRented: {
			type: Number,
			trim: true,
		},
		reference: String,
	},
	{
		versionKey: false, //   versionKey: false,  quita el key de cada elemante
		timestamps: true, //    timestamps: true,  crea una fecha de creacion y una fecha de update
	}
);

export default model('Habitaciones', habSchema);
