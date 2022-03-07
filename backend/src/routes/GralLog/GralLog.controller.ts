import { RequestHandler } from 'express';
import GralLog from './GralLog';

export const createGralLog: RequestHandler = async (req, res) => {
	console.log(req.body);
};
