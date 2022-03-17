import React from 'react';

import { GralLogInterface } from '../Services/GralLogInterface';

interface Props {
	eachLog: GralLogInterface;
}

const Logs = ({ eachLog }: Props) => {
	const longDate = eachLog.createdAt
		? new Date(eachLog.createdAt).toLocaleString('en-GB')
		: null;

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

	return (
		<div className='row logs text-center'>
			<div className='col-2 th border'>
				{functDate(eachLog)}{' '}
				{eachLog.createdAt
					? new Date(eachLog.createdAt).toLocaleString('en-GB')
					: null}
			</div>
			<div className='col-1 th border'>{eachLog.user}</div>
			<div className='col-2 th border'>{eachLog.type}</div>
			<div className='col-2 th border'>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.number
					: eachLog.description.extra
					? eachLog.description.extra.name
					: eachLog.description.outcome}
			</div>
			<div className='col-1 th border'>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.status
					: eachLog.description.extra
					? eachLog.description.extra.qty
					: eachLog.description.outcome}
			</div>
			<div className='col-1 th border'>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? '$ ' + eachLog.description.hab.priceFraction
					: eachLog.description.extra
					? '$ ' + eachLog.description.extra.priceSell
					: eachLog.description.outcome}
			</div>
			<div className='col-3 th border'>{eachLog.note}</div>
		</div>
	);
};

export default Logs;
