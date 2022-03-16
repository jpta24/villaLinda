import React from 'react';

import { GralLogInterface } from '../Services/GralLogInterface';

interface Props {
	eachLog: GralLogInterface;
}

const Logs = ({ eachLog }: Props) => {
	return (
		<div className='row logs'>
			<div className='col-2 th border'>
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
