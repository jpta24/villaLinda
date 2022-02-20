import React from 'react';
import { HabInterface } from '../Services/HabInterface';

import '../pages/Control/style.scss';

interface Props {
	eachHab: HabInterface;
	resFrac: (e: React.MouseEvent<HTMLElement>, hab: HabInterface) => void;
}

const cnHab = (hab: HabInterface) => {
	switch (hab.status) {
		case 'libre':
			return 'habLibre';

		case 'ResFull':
			return 'habFull';

		case 'ResFrac':
			return 'habFrac';

		case 'ResMantto':
			return 'habMantto';

		default:
			return 'habLibre';
	}
};
const textParagraph = (hab: HabInterface) => {
	switch (hab.status) {
		case 'libre':
			return 'Libre';

		case 'ResFull':
			return '09:00 am';

		case 'ResFrac':
			const d = new Date(String(hab.hrIn));
			let hour = d.getHours() + 4;
			let min = d.getMinutes();

			return hour + ':' + (min < 10 ? '0' + min : min);

		case 'ResMantto':
			const d2 = new Date(String(hab.hrOut));
			let hour2 = d2.getHours() + 1;
			let min2 = d2.getMinutes();

			return hour2 + ':' + (min2 < 10 ? '0' + min2 : min2);

		default:
			return 'habLibre';
	}
};

const Hab = ({ eachHab, resFrac }: Props) => {
	return (
		<div className='col-md my-2 habCard '>
			<div
				className={`card-body px-auto py-1 hab mx-auto ${cnHab(eachHab)}`}
				onClick={(event: React.MouseEvent<HTMLElement>) => {
					resFrac(event, eachHab);
				}}
			>
				<div className='row'>
					<div className='col-6'>
						<h3 className='my-0 text-center'>{eachHab.number}</h3>
					</div>
					<div className='col-6 sb2 justify-content-center px-2'>
						<div className='suitebtn py-auto'></div>
					</div>
				</div>

				<p className='my-0 text-center'>{textParagraph(eachHab)}</p>
			</div>
		</div>
	);
};

export default Hab;
