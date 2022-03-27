import React from 'react';

import { GralLogInterface } from '../Services/GralLogInterface';

interface Props {
	eachLog: GralLogInterface;
}

const Logs = ({ eachLog }: Props) => {
	const functDate = (eachLog: GralLogInterface) => {
		const dayDate = eachLog.createdAt
			? new Date(eachLog.createdAt).getDay()
			: null;

		switch (dayDate) {
			case 0:
				return 'Dom';
			case 1:
				return 'Lun';
			case 2:
				return 'Mar';
			case 3:
				return 'Mie';
			case 4:
				return 'Jue';
			case 5:
				return 'Vie';
			case 6:
				return 'Sab';
		}
	};
	const funtCssType = (eachLog: GralLogInterface) => {
		switch (eachLog.type) {
			case 'Income Hab':
				return 'rIncome';

			case 'Income Extra':
				return 'rIncome';

			case 'Outcome':
				return 'rOutcome';

			case 'Edit':
				return 'rEdit';

			default:
				return 'r2';
		}
	};

	return (
		<div className='row logs text-center'>
			<div className={`col-2 r2 border ${funtCssType(eachLog)}`}>
				{functDate(eachLog)}{' '}
				{eachLog.createdAt
					? new Date(eachLog.createdAt).toLocaleString('en-GB')
					: null}
			</div>
			<div className={`col-1 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.user}
			</div>
			<div className={`col-2 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.type}
			</div>
			<div className={`col-2 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.number
					: eachLog.description.extra
					? eachLog.description.extra.name
					: eachLog.description.outcome}
			</div>
			<div className={`col-1 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.status
					: eachLog.description.extra
					? eachLog.description.extra.buy
					: eachLog.description.outcome}
			</div>
			<div className={`col-1 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab?.status === 'ResFull'
					? '$ ' + eachLog.description.hab.priceFull
					: eachLog.description.hab?.status === 'ResFrac'
					? '$ ' + eachLog.description.hab.priceFraction
					: eachLog.description.extra?.buy
					? '$ ' +
					  eachLog.description.extra.priceSell * eachLog.description.extra.buy
					: eachLog.description.outcome}
			</div>
			<div className={`col-3 r2 border ${funtCssType(eachLog)}`}>
				{eachLog.note}
			</div>
		</div>
	);
};

export default Logs;
