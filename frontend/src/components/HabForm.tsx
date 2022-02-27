import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as habServices from '../Services/HabServices';

import { HabInterface } from '../Services/HabInterface';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type typeSubmit = FormEvent<HTMLFormElement>;

const HabForm = () => {
	const history = useNavigate();

	const { id } = useParams();

	const params = id;

	const initialState = {
		_id: '',
		createdAt: new Date(),
		updatedAt: '',
		number: 0,
		status: '',
		priceFraction: 0,
		priceFull: 0,
		hrIn: new Date(),
		hrOut: new Date(),
		hrMantto: new Date(),
		timesRented: 0,
	};

	const [habState, setHabState] = useState<HabInterface>(initialState);

	const handleInputChange = (e: InputChange) => {
		setHabState({ ...habState, [e.target.name]: e.target.value });
	};

	const handleStatusChange = (hab: HabInterface, string: string) => {
		hab.status = string;
		if (string === 'ResFrac' || string === 'ResFull') {
			hab.hrIn = new Date();
		} else if (string === 'ResMantto') {
			hab.hrOut = new Date();
		}
	};

	const handleSubmit = async (e: typeSubmit) => {
		e.preventDefault();

		if (params) {
			await habServices.updateHabData(params, habState);
			toast.info('Habitación Editada');
		} else {
			//await videoServices.createVideo(videoState); // si quiero usar lo que estoy enviando para verlo lo meto en una const res =
			//toast.success('Nueva Habitación creada');
		}

		history('/admin-habs');
	};

	const getHab = async (id: string) => {
		const res = await habServices.getHab(id);

		if (res.data._id === 'VNE') {
			toast.info('Hab Not Found');
			history('/create-hab');
		} else {
			const {
				_id,
				createdAt,
				updatedAt,
				number,
				status,
				priceFraction,
				priceFull,
				hrIn,
				hrOut,
				hrMantto,
				timesRented,
			} = res.data;
			setHabState({
				_id,
				createdAt,
				updatedAt,
				number,
				status,
				priceFraction,
				priceFull,
				hrIn,
				hrOut,
				hrMantto,
				timesRented,
			});
		}
	};

	useEffect(() => {
		params ? getHab(params) : setHabState(initialState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	const stateDropDown = {
		isOpen: false,
	};

	const [DropDown, setDropDown] = useState(stateDropDown);

	const toggleOpen = () => setDropDown({ isOpen: !DropDown.isOpen });

	const menuClass = `dropdown-menu${DropDown.isOpen ? ' show' : ''}`;

	const functStatusRead = (hab: HabInterface) => {
		switch (hab.status) {
			case 'libre':
				return 'Libre';

			case 'ResFull':
				return 'Reservación Full';

			case 'ResFrac':
				return 'Reservación Fracción';

			case 'ResMantto':
				return 'En Mantenimiento';

			default:
				break;
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-5 offset-md-3 my-4'>
					<div className='card my-4'>
						<div className='card-body'>
							{params ? (
								<h3 className='m-2 text-center titleform'>
									Editar Habitación
									<br />
									{habState.number}
								</h3>
							) : (
								<h3 className='m-2 text-center titleform'>New Video</h3>
							)}
							<form onSubmit={handleSubmit}>
								<div className='form-group row my-1'>
									<div className='dropdown' onClick={toggleOpen}>
										<label className='col-sm-4 col-form-label'>Status</label>
										<button
											className='btn btn-secondary dropdown-toggle col-sm-8'
											type='button'
											id='dropdownMenuButton'
											data-toggle='dropdown'
											aria-haspopup='true'
										>
											{functStatusRead(habState)}
										</button>
										<div
											className={menuClass}
											aria-labelledby='dropdownMenuButton'
										>
											<button
												className='dropdown-item'
												type='button'
												name='status'
												value='libre'
												onClick={() => {
													handleStatusChange(habState, 'libre');
												}}
											>
												Libre
											</button>
											<button
												className='dropdown-item'
												type='button'
												name='status'
												value='ResFrac'
												onClick={() => {
													handleStatusChange(habState, 'ResFrac');
												}}
											>
												Reserva Fracción
											</button>
											<button
												className='dropdown-item'
												type='button'
												name='status'
												value='ResFull'
												onClick={() => {
													handleStatusChange(habState, 'ResFull');
												}}
											>
												Reserva Full
											</button>
											<button
												className='dropdown-item'
												type='button'
												name='status'
												value='ResMantto'
												onClick={() => {
													handleStatusChange(habState, 'ResMantto');
												}}
											>
												En Mantenimiento
											</button>
										</div>
									</div>
								</div>

								<div className='form-group row my-1'>
									<label className='col-sm-4 col-form-label'>
										Precio Fracción
									</label>
									<div className='col-sm-8'>
										<input
											type='number'
											name='priceFraction'
											placeholder='Precio en $'
											className='form-control'
											onChange={handleInputChange}
											value={habState.priceFraction}
										/>
									</div>
								</div>

								<div className='form-group row my-1'>
									<label className='col-sm-4 col-form-label bold'>
										Precio Full
									</label>
									<div className='col-sm-8'>
										<input
											type='number'
											name='priceFull'
											placeholder='Precio en $'
											className='form-control'
											onChange={handleInputChange}
											value={habState.priceFull}
										/>
									</div>
								</div>
								<div className='row m-3'>
									{params ? (
										<button type='submit' className='btn btn-info m-2'>
											Editar
										</button>
									) : (
										<button type='submit' className='btn btn-primary m-2'>
											Add Video
										</button>
									)}
								</div>
								<div className='row m-3'>
									<button type='submit' className='btn btn-danger m-2'>
										Eliminar Habitación
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='row col-md-5 offset-md-3 my-4'>
				<button
					className='btn btn-warning m-2'
					onClick={() => {
						history(`/admin-habs`);
					}}
				>
					Regresar
				</button>
			</div>
		</div>
	);
};

export default HabForm;