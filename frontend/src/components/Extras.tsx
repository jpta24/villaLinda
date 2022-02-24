import React, { ChangeEvent, useState } from 'react';

import { ExtraInterface } from '../Services/ExtraInterface';

import condoms from '../assets/images/condoms.png';
import beers from '../assets/images/beers.png';
import cokes from '../assets/images/cokes.png';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
	eachExtra: ExtraInterface;
	buyExtra: (e: React.MouseEvent<HTMLElement>, extra: ExtraInterface) => void;
}

interface CantInterface {
	cant: number;
}

const Extras = ({ eachExtra, buyExtra }: Props) => {
	const funtIcon = (string: string) => {
		switch (string) {
			case 'Preservativos':
				return condoms;

			case 'Cervezas':
				return beers;

			case 'Refrescos':
				return cokes;

			default:
				break;
		}
	};

	const cnDisp = (number: number) => {
		switch (number) {
			case (number = 0):
				return 'extraAgot';

			default:
				return 'extraDisp';
		}
	};

	const initialState = {
		cant: 1,
	};

	const [cantState, setCantState] = useState<CantInterface>(initialState);

	const handleInputChange = (e: InputChange) => {
		setCantState({ ...cantState, [e.target.name]: e.target.value });
	};

	const newQty = (extra: ExtraInterface, cantState: CantInterface) => {
		extra.qty = extra.qty - cantState.cant;
		console.log(extra);
		return extra;
	};

	const url = window.location.href;
	return (
		<div className='col-md my-2 habCard '>
			<div
				className={`card-body px-auto py-1 hab mx-auto ${cnDisp(
					eachExtra.qty
				)}`}
				onClick={
					url.search('control-habs') > 0
						? (event: React.MouseEvent<HTMLElement>) => {
								if (eachExtra.qty - cantState.cant > -1) {
									newQty(eachExtra, cantState);
									buyExtra(event, eachExtra);
									setCantState(initialState);
								}
						  }
						: (event: React.MouseEvent<HTMLElement>) => {
								event.stopPropagation();
								event.nativeEvent.stopImmediatePropagation();
						  }
				}
			>
				<div className='row'>
					<div className='col-6'>
						<img src={funtIcon(eachExtra.name)} alt='' className='icon' />
					</div>
					<div className='col-6 sb2 justify-content-center px-2'>
						<input
							type='text'
							name='cant'
							placeholder='Cant'
							className='form-control m-2 formExtra'
							onChange={handleInputChange} // maneja los cambios en el input con esa funcion
							value={cantState.cant}
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								event.stopPropagation();
								event.nativeEvent.stopImmediatePropagation();
							}}
						/>
					</div>
				</div>

				<p className='my-0 text-center'>Disp: {eachExtra.qty}</p>
			</div>
		</div>
	);
};

export default Extras;
