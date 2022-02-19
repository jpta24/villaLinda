import React from 'react';
import { HabInterface } from '../Services/HabInterface';

import '../pages/Control/style.scss';

interface Props {
	eachHab: HabInterface;
	funcionRes: (
		event: React.MouseEvent<HTMLElement>,
		eachHab: HabInterface
	) => void;
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

/* const funcionRes = ({ eachHab, resFrac }: Props) => {
	switch (eachHab.status) {
		case 'libre':
			return (event: React.MouseEvent<HTMLElement>) => {
				resFrac(event, eachHab, 'ResFrac');
			};

		case 'ResFull':
			return (event: React.MouseEvent<HTMLElement>) => {
				resFrac(event, eachHab, 'ResMantto');
			};

		case 'ResFrac':
			return (event: React.MouseEvent<HTMLElement>) => {
				resFrac(event, eachHab, 'resMantto');
			};

		case 'Mantto':
			return (event: React.MouseEvent<HTMLElement>) => {
				resFrac(event, eachHab, 'libre');
			};

		default:
			return (event: React.MouseEvent<HTMLElement>) => {
				resFrac(event, eachHab, 'ResFrac');
			};
	}
}; */

const Hab = ({ eachHab, funcionRes }: Props) => {
	return (
		<div className='col-md my-2 habCard '>
			<div
				className={`card-body px-auto py-1 hab mx-auto ${cnHab(eachHab)}`}
				onClick={(event: React.MouseEvent<HTMLElement>) => {
					funcionRes(event, eachHab);
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

				<p className='my-0 text-center'>
					hora{/* {eachHab.hrOut?.getHours} */}
				</p>
			</div>
		</div>
	);
};

export default Hab;
