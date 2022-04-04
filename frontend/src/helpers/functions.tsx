import { GralLogInterface } from '../Services/GralLogInterface';

export const logDisplayPrice = (eachLog: GralLogInterface) => {
	if (eachLog.type === 'Reset All' || eachLog.type.search('Admin') !== -1) {
		return null;
	} else if (eachLog.description.hab?.status === 'ResFrac') {
		return '$ ' + eachLog.description.hab.priceFraction;
	} else if (
		eachLog.description.hab?.status === 'ResFull' &&
		eachLog.note === eachLog.description.hab.timesRented
	) {
		return '$ ' + eachLog.description.hab?.priceFull;
	} else if (
		eachLog.description.hab?.status === 'ResFull' &&
		eachLog.note !== eachLog.description.hab.timesRented
	) {
		return (
			'$ ' +
			(eachLog.description.hab?.priceFull -
				eachLog.description.hab?.priceFraction)
		);
	} else if (eachLog.description.extra?.buy) {
		return eachLog.description.extra.priceSell * eachLog.description.extra.buy;
	} else {
		return eachLog.description.outcome;
	}
};
