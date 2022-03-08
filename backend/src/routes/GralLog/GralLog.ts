import { Schema, model, Mongoose } from 'mongoose';
import Habitaciones from '../Habitaciones/Habitaciones';
import Extra from '../ExtraMerc/Extra';
import Outcome from '../Outcome/Outcome';

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
			hab: { type: Schema.Types.ObjectId, ref: Habitaciones },
			extra: { type: Schema.Types.ObjectId, ref: Extra },
			outcome: { type: Schema.Types.ObjectId, ref: Outcome },
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
