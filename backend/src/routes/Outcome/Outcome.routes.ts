import { RequestHandler } from 'express';
import Outcome from './Outcome';

export const createOutcome: RequestHandler = async (req, res) => {
	const outcome = new Outcome(req.body);
	const savedOutcome = await outcome.save();
	res.json(savedOutcome);
};

export const getOutcomes: RequestHandler = async (req, res) => {
	try {
		const outcomes = await Outcome.find();
		return res.json(outcomes);
	} catch (error) {
		res.json(error);
	}
};

/* export const updateOutcome: RequestHandler = async (req, res) => {
	let info = req.body.description.outcome;
	try {
		const outcomeUpdated = await Outcome.findByIdAndUpdate(info._id, info, {
			new: true,
		});

		const newLogUpdated = new GralLog(req.body);
		const savedLog = await newLogUpdated.save();

		return res.json(outcomeUpdated);
	} catch (error) {
		return res.json('Outcome no encontrado').status(204);
	}
};

//------------------------------------------------------------------------

export const getOutcome: RequestHandler = async (req, res) => {
	try {
		const outcomeFound = await Outcome.findById(req.params.id);
		return res.json(outcomeFound);
	} catch (error) {
		return res.json('Outcome no encontrada').status(204);
	}
};

export const updateOutcomeData: RequestHandler = async (req, res) => {
	try {
		const outcomeUpdated = await Outcome.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		return res.json(outcomeUpdated);
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

export const deleteOutcome: RequestHandler = async (req, res) => {
	try {
		const outcomeFound = await Outcome.findByIdAndDelete(req.params.id);
		return res.json(outcomeFound);
	} catch (error) {
		return res.json('Outcome no encontrada').status(204);
	}
}; */
