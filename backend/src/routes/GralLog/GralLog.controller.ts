import { RequestHandler } from 'express';
import GralLog from './GralLog';

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
