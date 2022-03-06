import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as habServices from '../../Services/HabServices';
import { HabInterface } from '../../Services/HabInterface';
import '../Control/style.scss';
import Hab from '../../components/Hab';
import ExtraCont from '../../components/ExtraCont';

const Control = () => {
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
		await habServices.updateHab(hab);
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
				<h2 className='my-2 text-center'>
					{url.search('control-habs') > 0
						? 'CONTROL DE HABITACIONES'
						: 'ADMINISTRACION DE HABITACIONES'}
				</h2>
				<div className='col-md-6'>
					<h3 className='my-3 text-center'>Sencillas</h3>
					<div className='row mx-auto'>
						{habitacionesSencillas.map((eachHab: HabInterface) => {
							return (
								<Hab eachHab={eachHab} key={eachHab.number} resFrac={resFrac} />
							);
						})}
					</div>
				</div>
				<div className='col-md-2'>
					<h3 className='my-3 text-center'>Suites</h3>
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
					<h3 className='my-3 text-center'>Extras</h3>
					<ExtraCont />
				</div>
			</div>
			<div className='row my-4 justify-content-center'>
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
