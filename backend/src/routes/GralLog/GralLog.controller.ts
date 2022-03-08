import { RequestHandler } from 'express';
import GralLog from './GralLog';

export const createGralLog: RequestHandler = async (req, res) => {
	console.log(req.body);
};

export const getGralLogs: RequestHandler = async (req, res) => {
	try {
		const logs = await GralLog.find();
		return res.json(logs);
	} catch (error) {
		res.json(error);
	}
};
