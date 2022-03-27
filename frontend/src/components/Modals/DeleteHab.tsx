import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import * as habServices from '../..//Services/HabServices';
import * as gralLogServices from '../..//Services/GralLogServices';
import { toast } from 'react-toastify';
import User from '../User';
import { HabInterface } from '../../Services/HabInterface';

interface Props {
	habState: HabInterface;
}

const DeleteHabModal = ({ habState }: Props) => {
	const user = User();

	const history = useNavigate();

	const { id } = useParams();

	const params = id;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const deleteHab = async () => {
		if (params) {
			const newLog = {
				user: user,
				type: 'Admin HabDelete',
				description: {
					hab: habState,
				},
			};
			await habServices.deleteHab(params);
			await gralLogServices.createLGralLog(newLog);
			toast.warning('Habitación Eliminada');
		}
		history(`/admin-habs`);
	};

	return (
		<div className='form-group row my-1 mx-3 justify-content-center'>
			<button onClick={handleShow} className='btn btn-danger my-2 col-sm-8'>
				Eliminar Habitación
			</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Conformación de Eliminación</Modal.Title>
				</Modal.Header>
				<Modal.Body>¿Seguro desea Eliminar esta Habitación?</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						No
					</Button>
					<Button variant='primary' onClick={deleteHab}>
						Eliminar Habitación
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default DeleteHabModal;
