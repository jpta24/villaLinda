import { Schema, model } from 'mongoose';

const gralLogSchema = new Schema(
	{
		user: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		description: {
			hab: {
				number: {
					type: Number,
				},
				status: {
					type: String,
				},
				price: {
					type: Number,
					trim: true,
				},
				timesRented: {
					type: Number,
					trim: true,
				},
			},
			extra: {
				name: {
					type: String,
				},
				qty: {
					type: Number,
					trim: true,
				},
				price: {
					type: Number,
					trim: true,
				},
			},
			outcome: {
				name: {
					type: String,
				},
				price: {
					type: Number,
					trim: true,
				},
			},
		},
		note: {
			type: String,
			trim: true,
		},
	},
	{
		versionKey: false, //   versionKey: false,  quita el key de cada elemante
		timestamps: true, //    timestamps: true,  crea una fecha de creacion y una fecha de update
	}
);

export default model('GralLog', gralLogSchema);
