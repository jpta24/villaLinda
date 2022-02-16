import React from 'react';
import { HabInterface } from '../Services/HabInterface';

import '../pages/Control/style.scss';

interface Props {
	eachHab: HabInterface;
}

const Hab = ({ eachHab }: Props) => {
	return (
		<div className='col-md-3 m-2 '>
			<div className='card-body bg-success hab'>
				<h3 className='titlePr'>{eachHab.number}</h3>
			</div>
		</div>
	);
};

export default Hab;
