import { RequestHandler } from 'express';
import Habitaciones from '../Habitaciones/Habitaciones';
import ExtraMerc from '../ExtraMerc/Extra';
import GralLog from './GralLog';
import { habs, extras } from './Datos';

export const getGralLogs: RequestHandler = async (req, res) => {
	try {
		const logs = await GralLog.find();
		return res.json(logs);
	} catch (error) {
		res.json(error);
	}
};

export const deleteGralLog: RequestHandler = async (req, res) => {
	try {
		const extraFound = await GralLog.findByIdAndDelete(req.params.id);
		/* return res.json(extraFound); */
	} catch (error) {
		return res.json('GralLog no encontrada').status(204);
	}
};

export const updateAll: RequestHandler = async (req, res) => {
	try {
		if (req.body.type === 'Reset All') {
			for (let i = 0; i < habs.length; i++) {
				const habUpdated = await Habitaciones.findByIdAndUpdate(
					habs[i]._id,
					habs[i],
					{
						new: true,
					}
				);
				console.log(habUpdated);
			}
			for (let i = 0; i < extras.length; i++) {
				const extraUpdated = await ExtraMerc.findByIdAndUpdate(
					extras[i]._id,
					extras[i],
					{
						new: true,
					}
				);
				console.log(extraUpdated);
			}

			return res.json('Reset');
		}
		const newLog = {
			user: req.body.user,
			type: 'Reset All',
		};
		console.log(newLog);

		const newLogUpdated = new GralLog(newLog);
		const savedLog = await newLogUpdated.save();
	} catch (error) {
		return res.json('Extra no encontrado').status(204);
	}
};
