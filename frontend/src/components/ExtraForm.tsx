import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ExtraInterface } from '../Services/ExtraInterface';

import * as extraServices from '../Services/ExtraServices';

import DeleteExtraModal from '../components/Modals/DeleteExtra';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type typeSubmit = FormEvent<HTMLFormElement>;

const ExtraForm = () => {
	const history = useNavigate();

	const url = window.location.href;

	const { id } = useParams();

	const params = id;

	const initialState = {
		_id: '',
		name: '',
		priceBuy: 0,
		priceSell: 0,
		qty: 0,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	const [extraState, setExtraState] = useState<ExtraInterface>(initialState);

	const handleSubmit = async (e: typeSubmit) => {
		e.preventDefault();

		if (params) {
			await extraServices.updateExtraData(params, extraState);
			toast.warning('Extra Editado');
		} else {
			delete extraState._id;
			await extraServices.createExtra(extraState);
			extraState._id = '';
			toast.success('Extra Creado');
		}

		history('/admin-habs');
	};

	const handleInputChange = (e: InputChange) => {
		setExtraState({ ...extraState, [e.target.name]: e.target.value });
	};

	const getExtra = async (id: string) => {
		const res = await extraServices.getExtra(id);

		if (res.data._id === 'VNE') {
			toast.info('Extra Not Found');
			history('/create-hab');
		} else {
			const { _id, name, priceBuy, priceSell, qty, createdAt, updatedAt } =
				res.data;
			setExtraState({
				_id,
				name,
				priceBuy,
				priceSell,
				qty,
				createdAt,
				updatedAt,
			});
		}
	};

	useEffect(() => {
		params ? getExtra(params) : setExtraState(initialState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-5 offset-md-3 my-4'>
					<div className='card my-4'>
						<div className='card-body'>
							{url.search('create-extra') > 0 ? (
								<h3 className='m-2 text-center titleform'>Crear Nuevo Extra</h3>
							) : params ? (
								<h3 className='m-2 text-center titleform'>
									Editar Extra
									<br /> {extraState.name}
								</h3>
							) : null}

							<form onSubmit={handleSubmit}>
								{url.search('create-extra') > 0 ? (
									<div className='form-group row my-1'>
										<label className='col-sm-4 col-form-label'>Nombre</label>
										<div className='col-sm-8'>
											<input
												type='text'
												name='name'
												placeholder='Nombre del Nuevo Extra'
												className='form-control'
												onChange={handleInputChange}
												value={extraState.name}
											/>
										</div>
									</div>
								) : null}

								<div className='form-group row my-1'>
									<label className='col-sm-4 col-form-label'>Cantidad</label>
									<div className='col-sm-8'>
										<input
											type='number'
											name='qty'
											placeholder='Precio en $'
											className='form-control'
											onChange={handleInputChange}
											value={extraState.qty}
										/>
									</div>
								</div>

								<div className='form-group row my-1'>
									<label className='col-sm-4 col-form-label bold'>
										Precio Venta
									</label>
									<div className='col-sm-8'>
										<input
											type='number'
											name='priceSell'
											placeholder='Precio en $'
											className='form-control'
											onChange={handleInputChange}
											value={extraState.priceSell}
										/>
									</div>
								</div>

								{params ? (
									<div className='form-group row my-2 mx-3'>
										<button className='btn btn-info my-2'>Editar</button>
									</div>
								) : (
									<div className='form-group row my-2 mx-3'>
										<button className='btn btn-primary my-2'>
											Crear Nuevo Extra
										</button>
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-5 offset-md-3 my-1'>
					<div className='form-group row my-1 mx-3 justify-content-center'>
						{params ? <DeleteExtraModal /> : null}

						<button
							className='btn btn-warning col-sm-8 m-2'
							onClick={() => {
								history(`/admin-habs`);
							}}
						>
							Regresar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExtraForm;
