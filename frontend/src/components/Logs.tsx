import React from 'react';

import { GralLogInterface } from '../Services/GralLogInterface';
import { formatDaySp } from '../helpers/formatDaySp';
import { logsCssType } from '../helpers/functionsCsstypes';
import { logDisplayPrice } from '../helpers/functions';

interface Props {
	eachLog: GralLogInterface;
}

const Logs = ({ eachLog }: Props) => {
	const functDate = (eachLog: GralLogInterface) => {
		const dayDate = eachLog.createdAt
			? new Date(eachLog.createdAt).getDay()
			: null;

		return formatDaySp(dayDate);
	};

	return (
		<div className='row logs text-center'>
			<div className={`col-2 r2 border ${logsCssType(eachLog.type)}`}>
				{functDate(eachLog)}{' '}
				{eachLog.createdAt
					? new Date(eachLog.createdAt).toLocaleString('en-GB')
					: null}
			</div>
			<div className={`col-1 r2 border ${logsCssType(eachLog.type)}`}>
				{eachLog.user}
			</div>
			<div className={`col-2 r2 border ${logsCssType(eachLog.type)}`}>
				{eachLog.type}
			</div>
			<div className={`col-2 r2 border ${logsCssType(eachLog.type)}`}>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.number
					: eachLog.description.extra
					? eachLog.description.extra.name
					: eachLog.description.outcome}
			</div>
			<div className={`col-1 r2 border ${logsCssType(eachLog.type)}`}>
				{eachLog.type === 'Reset All'
					? null
					: eachLog.description.hab
					? eachLog.description.hab.status
					: eachLog.description.extra
					? eachLog.description.extra.buy
					: eachLog.description.outcome}
			</div>
			<div className={`col-1 r2 border ${logsCssType(eachLog.type)}`}>
				{logDisplayPrice(eachLog)}
			</div>
			<div className={`col-3 r2 border ${logsCssType(eachLog.type)}`}>
				{eachLog.note}
			</div>
		</div>
	);
};

export default Logs;
