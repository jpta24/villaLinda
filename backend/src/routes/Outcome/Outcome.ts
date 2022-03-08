import { Schema, model } from 'mongoose';

const outcomeSchema = new Schema(
	{
		ref: { type: Number || String },
		name: {
			type: String,
		},
		price: {
			type: Number,
			trim: true,
		},
	},
	{
		versionKey: false, //   versionKey: false,  quita el key de cada elemante
		timestamps: true, //    timestamps: true,  crea una fecha de creacion y una fecha de update
	}
);

export default model('Outcome', outcomeSchema);
