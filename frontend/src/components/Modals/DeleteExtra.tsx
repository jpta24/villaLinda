import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import * as extraServices from '../..//Services/ExtraServices';
import * as gralLogServices from '../..//Services/GralLogServices';
import { toast } from 'react-toastify';
import User from '../User';
import { ExtraInterface } from '../../Services/ExtraInterface';

interface Props {
	extraState: ExtraInterface;
}

const DeleteExtraModal = ({ extraState }: Props) => {
	const user = User();

	const history = useNavigate();

	const { id } = useParams();

	const params = id;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const deleteExtra = async () => {
		if (params) {
			const newLog = {
				user: user,
				type: 'Admin ExtraDelete',
				description: {
					extra: extraState,
				},
			};
			await extraServices.deleteExtra(params);
			await gralLogServices.createLGralLog(newLog);
			toast.warning('Extra Eliminado');
		}
		history(`/admin-habs`);
	};

	return (
		<div className='form-group row my-1 mx-3 justify-content-center'>
			<button onClick={handleShow} className='btn btn-danger my-2 col-sm-8'>
				Eliminar Extra
			</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Conformación de Eliminación</Modal.Title>
				</Modal.Header>
				<Modal.Body>¿Seguro desea Eliminar este Extra?</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						No
					</Button>
					<Button variant='primary' onClick={deleteExtra}>
						Eliminar Extra
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default DeleteExtraModal;
