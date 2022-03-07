import { RequestHandler } from 'express';
import ExtraMerc from './Extra';

export const createExtra: RequestHandler = async (req, res) => {
	const extraFound = await ExtraMerc.findOne({ name: req.body.name });
	if (extraFound)
		return res.status(301).json({ message: 'Este Extra ya existe' });

	const extra = new ExtraMerc(req.body);
	const savedExtra = await extra.save();
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
	try {
		const extraUpdated = await ExtraMerc.findByIdAndUpdate(
			req.body._id,
			req.body,
			{ new: true }
		);
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
	try {
		const extraUpdated = await ExtraMerc.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
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

/* export const getHab: RequestHandler = async (req, res) => {
	try {
		const habFound = await Habitaciones.findById(req.params.id);
		return res.json(habFound);
	} catch (error) {
		return res.json('Extra no encontrada').status(204);
	}
}; */

/* export const deleteHab: RequestHandler = async (req, res) => {
	try {
		const habFound = await Habitaciones.findByIdAndDelete(req.params.id);
		return res.json(habFound);
	} catch (error) {
		return res.json('Habitación no encontrada').status(204);
	}
}; */
