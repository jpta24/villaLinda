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

	const resFrac = async (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface,
		reserv: string
	) => {
		e.preventDefault();
		hab.status = reserv;
		await habServices.updateHab(hab);

		loadHabs();
	};

	const funcionRes = (
		event: React.MouseEvent<HTMLElement>,
		eachHab: HabInterface
	) => {
		switch (eachHab.status) {
			case 'libre':
				return resFrac(event, eachHab, 'ResFrac');

			case 'ResFull':
				return resFrac(event, eachHab, 'ResMantto');

			case 'ResFrac':
				return resFrac(event, eachHab, 'ResMantto');

			case 'Mantto':
				return resFrac(event, eachHab, 'libre');

			default:
				return resFrac(event, eachHab, 'ResFrac');
		}
	};

	/* const resMantto = async (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface
	) => {
		e.preventDefault();
		hab.status = 'Mantto';
		await habServices.updateHab(hab);
		loadHabs();
	}; */

	const habitacionesSencillas = habs.filter((hab: HabInterface) => {
		return hab.priceFraction === 30;
	});

	const habitacionesSuites = habs.filter((hab: HabInterface) => {
		return hab.priceFraction === 50;
	});

	/* const resFrac = (e: HabInterface) => {
		e.status = 'ResFrac';
		console.log(habs);
	}; */

	return (
		<div className='container'>
			<div className='row'>
				<h2 className='my-2 text-center'>CONTROL DE HABITACIONES</h2>
				<div className='col-md-6'>
					<h3 className='my-3 text-center'>Sencillas</h3>
					<div className='row mx-auto'>
						{habitacionesSencillas.map((eachHab: HabInterface) => {
							return (
								<Hab
									eachHab={eachHab}
									key={eachHab.number}
									funcionRes={funcionRes}
								/>
							);
						})}
					</div>
				</div>
				<div className='col-md-2'>
					<h3 className='my-3 text-center'>Suites</h3>
					<div className='row mx-auto '>
						{habitacionesSuites.map((eachHab: HabInterface) => {
							return (
								<Hab
									eachHab={eachHab}
									key={eachHab.number}
									funcionRes={funcionRes}
								/>
							);
						})}
					</div>
				</div>
				<div className='col-md-2'>
					<h3 className='my-3 text-center'>Extras</h3>
					<div className='row mx-auto '>
						{habitacionesSuites.map((eachHab: HabInterface) => {
							return (
								<Hab
									eachHab={eachHab}
									key={eachHab.number}
									funcionRes={funcionRes}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className='row my-4 justify-content-center'>
				<button type='button' className=' col-md-2 mx-3 btn btn-warning'>
					Ver Reporte
				</button>
				<button type='button' className='col-md-2 mx-3 btn btn-primary'>
					Entregar Turno
				</button>
			</div>
		</div>
	);
};

export default Control;
