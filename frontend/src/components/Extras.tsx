import React, { ChangeEvent, useState } from 'react';

import { ExtraInterface } from '../Services/ExtraInterface';

import condoms from '../assets/images/condoms.png';
import beers from '../assets/images/beers.png';
import cokes from '../assets/images/cokes.png';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
	eachExtra: ExtraInterface;
	/* resFrac: (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface,
		string: string
	) => void; */
}

interface CantInterface {
	cant: number;
}

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

/*  
${cnHabFull(eachHab)}*/
const Extras = ({ eachExtra }: Props) => {
	const [cantState, setCantState] = useState<CantInterface>(initialState);

	const handleInputChange = (e: InputChange) => {
		setCantState({ ...cantState, [e.target.name]: e.target.value });
	};

	return (
		<div className='col-md my-2 habCard '>
			<div
				className={`card-body px-auto py-1 hab mx-auto ${cnDisp(
					eachExtra.qty
				)}`}
				onClick={(event: React.MouseEvent<HTMLElement>) => {
					/* resFrac(event, eachHab, 'libre'); */
				}}
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
						/>
					</div>
				</div>

				<p className='my-0 text-center'>Disp: {eachExtra.qty}</p>
			</div>
		</div>
	);
};

export default Extras;
