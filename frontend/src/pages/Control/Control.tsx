import React, { useState, useEffect } from 'react';
import * as habServices from '../../Services/HabServices';
import { HabInterface } from '../../Services/HabInterface';
import '../Control/style.scss';
import Hab from '../../components/Hab';

const Control = () => {
	const [habs, setHabs] = useState<HabInterface[]>([]);

	const loadHabs = async () => {
		const res = await habServices.getHabs();
		setHabs(res.data);
		// para ordenar los resultados aplica los que esta en el archivo
		//C:\Users\jeanp\Documents\WEB DEVELOPMENT\mydstore\frontend\src\pages\ScanUrl
		//const formatedKW
	};

	useEffect(() => {
		loadHabs();
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<h1 className='my-3'>CONTROL DE HABITACIONES</h1>
				<div className='col-md-7'>
					<h3 className='my-3'>Sencillas</h3>
					<div className='row mx-auto'>
						{habs.map((eachHab: HabInterface) => {
							return <Hab eachHab={eachHab} key={eachHab.number} />;
						})}
					</div>
				</div>
				<div className='col-md-2'>
					<h3 className='my-3'>Suites</h3>
				</div>
			</div>
		</div>
	);
};

export default Control;
