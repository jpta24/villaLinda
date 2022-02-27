import { RequestHandler } from 'express';
import Habitaciones from './Habitaciones';

export const createHab: RequestHandler = async (req, res) => {
	const habFound = await Habitaciones.findOne({ number: req.body.number });
	if (habFound)
		return res.status(301).json({ message: 'Esta Habitación ya existe' });

	const hab = new Habitaciones(req.body);
	const savedHabitaciones = await hab.save();
	res.json(savedHabitaciones);
};

export const getHabs: RequestHandler = async (req, res) => {
	try {
		const habs = await Habitaciones.find();
		return res.json(habs);
	} catch (error) {
		res.json(error);
	}
};

export const updateHab: RequestHandler = async (req, res) => {
	try {
		if (req.body.status === 'libre') {
			req.body.hrIn = new Date();
			req.body.status = 'ResFrac';
		} else if (req.body.status === 'full') {
			req.body.hrIn = new Date();
			req.body.status = 'ResFull';
		} else if (req.body.status === 'ResFrac' || req.body.status === 'ResFull') {
			req.body.hrOut = new Date();
			req.body.status = 'ResMantto';
			req.body.timesRented++;
		} else if (req.body.status === 'ResMantto') {
			req.body.status = 'libre';
			req.body.hrIn = null;
			req.body.hrOut = null;
		}
		const habUpdated = await Habitaciones.findByIdAndUpdate(
			req.body._id,
			req.body,
			{ new: true }
		);
		return res.json(habUpdated);
	} catch (error) {
		return res.json('Habitación no encontrada').status(204);
	}
};

export const getHab: RequestHandler = async (req, res) => {
	try {
		const habFound = await Habitaciones.findById(req.params.id);
		return res.json(habFound);
	} catch (error) {
		return res.json('Habitación no encontrada').status(204);
	}
};

export const updateHabData: RequestHandler = async (req, res) => {
	try {
		const habUpdated = await Habitaciones.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		return res.json(habUpdated);
	} catch (error) {
		return res.json({
			_id: 'VNE',
			number: 2,
			status: 'libre',
			priceFraction: 30,
			priceFull: 40,
			timesRented: 1,
			createdAt: '2022-02-14T20:23:11.895Z',
			updatedAt: '2022-02-24T22:31:05.159Z',
			hrIn: null,
			hrOut: null,
		});
	}
};

/* export const deleteHab: RequestHandler = async (req, res) => {
	try {
		const habFound = await Habitaciones.findByIdAndDelete(req.params.id);
		return res.json(habFound);
	} catch (error) {
		return res.json('Habitación no encontrada').status(204);
	}
}; */
