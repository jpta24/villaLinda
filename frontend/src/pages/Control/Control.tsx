import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as habServices from '../../Services/HabServices';
import { HabInterface } from '../../Services/HabInterface';
import * as gralLogServices from '../../Services/GralLogServices';
/*import { GralLogInterface } from '../../Services/GralLogInterface'; */
import '../Control/style.scss';
import Hab from '../../components/Hab';
import ExtraCont from '../../components/ExtraCont';
import User from '../../components/User';

const Control = () => {
	const user = User();

	const [habs, setHabs] = useState<HabInterface[]>([]);

	const loadHabs = async () => {
		const res = await habServices.getHabs();
		const formatedHabs = res.data
			.map((eachKW) => {
				return {
					...eachKW,
				};
			})
			.sort((a, b) => a.number - b.number);
		setHabs(formatedHabs);
	};

	useEffect(() => {
		loadHabs();
	}, []);

	const resFrac = async (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface,
		string: string
	) => {
		e.preventDefault();
		if (
			hab.status === 'libre' ||
			(hab.status === 'ResFrac' && string === 'full')
		) {
			hab.status = string;
		}

		const newLog = {
			user: user,
			type: 'Income Hab',
			description: {
				hab: hab,
			},
		};
		await habServices.updateHab(newLog);
		loadHabs();
	};

	const resetAll = async (
		e: React.MouseEvent<HTMLElement>,
		hab: HabInterface
	) => {
		e.preventDefault();
		const newLog = {
			user: user,
			type: 'Reset All',
			description: {
				hab: hab,
			},
		};
		await gralLogServices.updateAll(newLog);
		loadHabs();
	};

	const habitacionesSencillas = habs.filter((hab: HabInterface) => {
		return hab.priceFraction === 30;
	});

	const habitacionesSuites = habs.filter((hab: HabInterface) => {
		return hab.priceFraction === 50;
	});

	const url = window.location.href;

	const history = useNavigate();
	return (
		<div className='container'>
			<div className='row'>
				<h2 className='my-1 text-center'>
					{url.search('control-habs') > 0
						? 'CONTROL DE HABITACIONES'
						: 'ADMINISTRACION DE HABITACIONES'}
				</h2>
				<div className='col-md-6'>
					<h3 className='my-1 text-center'>Sencillas</h3>
					<div className='row mx-auto'>
						{habitacionesSencillas.map((eachHab: HabInterface) => {
							return (
								<Hab eachHab={eachHab} key={eachHab.number} resFrac={resFrac} />
							);
						})}
					</div>
				</div>
				<div className='col-md-2'>
					<h3 className='my-1 text-center'>Suites</h3>
					<div className='row mx-auto '>
						{habitacionesSuites.map((eachHab: HabInterface) => {
							return (
								<Hab eachHab={eachHab} key={eachHab.number} resFrac={resFrac} />
							);
						})}
					</div>
				</div>
				<div className='col-md-1'></div>
				<div className='col-md-2'>
					<h3 className='my-1 text-center'>Extras</h3>
					<ExtraCont />
				</div>
			</div>
			<div className='row my-1 justify-content-center'>
				{url.search('control-habs') > 0 ? (
					<div className='row '>
						<button type='button' className=' col-md-2 mx-3 btn btn-warning'>
							Ver Reporte
						</button>
					</div>
				) : (
					<div className='row justify-content-center'>
						<button
							type='button'
							className=' col-md-2 mx-3 btn btn-warning'
							onClick={() => {
								history(`/admin-habs/create-hab`);
							}}
						>
							Crear Habitación
						</button>
						<button
							type='button'
							className=' col-md-2 mx-3 btn btn-info'
							onClick={() => {
								history(`/admin-habs/create-extra`);
							}}
						>
							Crear Extra
						</button>
						<button
							type='button'
							className=' col-md-2 mx-3 btn btn-danger'
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								resetAll(event, habs[0]);
							}}
						>
							Reset All
						</button>
					</div>
				)}

				{/* <button type='button' className='col-md-2 mx-3 btn btn-primary'>
					Entregar Turno
				</button> */}
			</div>
		</div>
	);
};

export default Control;
