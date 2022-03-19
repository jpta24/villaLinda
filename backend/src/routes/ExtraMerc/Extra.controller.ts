import { RequestHandler } from 'express';
import ExtraMerc from './Extra';

import GralLog from '../GralLog/GralLog';

const createNewGralLog = async (gralLog: any) => {
	const newLogUpdated = new GralLog(gralLog);
	const savedLog = await newLogUpdated.save();
};

export const createExtra: RequestHandler = async (req, res) => {
	let info = req.body.description.extra;
	const extraFound = await ExtraMerc.findOne({ name: info.name });
	if (extraFound)
		return res.status(301).json({ message: 'Este Extra ya existe' });

	const extra = new ExtraMerc(info);
	const savedExtra = await extra.save();
	createNewGralLog(req.body);
	res.json(savedExtra);
};

export const getExtras: RequestHandler = async (req, res) => {
	try {
		const extras = await ExtraMerc.find();
		return res.json(extras);
	} catch (error) {
		res.json(error);
	}
};

export const updateExtra: RequestHandler = async (req, res) => {
	let info = req.body.description.extra;
	try {
		const extraUpdated = await ExtraMerc.findByIdAndUpdate(info._id, info, {
			new: true,
		});

		createNewGralLog(req.body);

		return res.json(extraUpdated);
	} catch (error) {
		return res.json('Extra no encontrado').status(204);
	}
};

//------------------------------------------------------------------------

export const getExtra: RequestHandler = async (req, res) => {
	try {
		const extraFound = await ExtraMerc.findById(req.params.id);
		return res.json(extraFound);
	} catch (error) {
		return res.json('Extra no encontrada').status(204);
	}
};

export const updateExtraData: RequestHandler = async (req, res) => {
	let info = req.body.description.extra;
	try {
		const extraUpdated = await ExtraMerc.findByIdAndUpdate(
			req.params.id,
			info,
			{ new: true }
		);
		createNewGralLog(req.body);
		return res.json(extraUpdated);
	} catch (error) {
		return res.json({
			_id: 'VNE',
			name: '',
			priceBuy: '',
			priceSell: '',
			qty: '',
			createdAt: '2022-02-14T20:23:11.895Z',
			updatedAt: '2022-02-14T20:23:11.895Z',
		});
	}
};

export const deleteExtra: RequestHandler = async (req, res) => {
	try {
		const extraFound = await ExtraMerc.findByIdAndDelete(req.params.id);
		return res.json(extraFound);
	} catch (error) {
		return res.json('Extra no encontrada').status(204);
	}
};
