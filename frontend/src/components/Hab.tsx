import React from 'react';
import { HabInterface } from '../Services/HabInterface';

import '../pages/Control/style.scss';

interface Props {
	eachHab: HabInterface;
	resFrac: (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface,
		string: string
	) => void;
}

const Hab = ({ eachHab, resFrac }: Props) => {
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

	const cnHabFull = (hab: HabInterface) => {
		switch (hab.status) {
			case 'ResFull':
				return 'habFull';

			case 'ResMantto':
				return 'habManttoHidden';

			default:
				return '';
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

				return (
					(hour > 23 ? hour - 24 : hour) + ':' + (min < 10 ? '0' + min : min)
				);

			case 'ResMantto':
				const d2 = new Date(String(hab.hrOut));
				let hour2 = d2.getHours() + 1;
				let min2 = d2.getMinutes();

				return (
					(hour2 > 23 ? hour2 - 24 : hour2) +
					':' +
					(min2 < 10 ? '0' + min2 : min2)
				);

			default:
				return 'habLibre';
		}
	};
	const url = window.location.href;
	return (
		<div className='col-md my-2 habCard '>
			<div
				className={`card-body px-auto py-1 hab mx-auto ${cnHab(eachHab)}`}
				onClick={
					url.search('control-habs') > 0
						? (event: React.MouseEvent<HTMLElement>) => {
								resFrac(event, eachHab, 'libre');
						  }
						: (event: React.MouseEvent<HTMLElement>) => {
								event.stopPropagation();
								event.nativeEvent.stopImmediatePropagation();
						  }
				}
			>
				<div className='row'>
					{url.search('control-habs') > 0 ? (
						''
					) : (
						<span
							className='text-danger deleteCard'
							/* onClick={() => {
							eachvideo._id && // (si video._id existe entonce && ejecuta la siguente funcion) // salia un error pq el _id era opcional _id?
								handleDelete(eachvideo._id);
						}} */
						>
							X
						</span>
					)}
					<div className='col-6'>
						<h3 className='my-0 text-center'>{eachHab.number}</h3>
					</div>
					<div className='col-6 sb2 justify-content-center px-2'>
						<div
							className={`suitebtn py-auto ${cnHabFull(eachHab)}`}
							onClick={
								url.search('control-habs') > 0
									? (event: React.MouseEvent<HTMLElement>) => {
											resFrac(event, eachHab, 'full');
									  }
									: (event: React.MouseEvent<HTMLElement>) => {
											event.stopPropagation();
											event.nativeEvent.stopImmediatePropagation();
									  }
							}
						></div>
					</div>
				</div>

				<p className='my-0 text-center'>{textParagraph(eachHab)}</p>
			</div>
		</div>
	);
};

export default Hab;
