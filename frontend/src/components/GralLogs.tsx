import React, { useState, useEffect } from 'react';

import Logs from './Logs';

import { GralLogInterface } from '../Services/GralLogInterface';
import * as GralLogServices from '../Services/GralLogServices';

import User from '../components/User';

const GralLogs = () => {
	const user = User();

	const [gralLogs, setGralLogs] = useState<GralLogInterface[]>([]);

	const loadGralLogs = async () => {
		const res = await GralLogServices.getGralLogs();
		setGralLogs(res.data);
	};

	useEffect(() => {
		loadGralLogs();
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<h2 className='my-1 text-center'>LOGS GENERALES</h2>
				<div className='mx-auto'>
					<div className='mb-4 logs'>
						<div className='row'>
							<div className='col-2 th border'>HORA</div>
							<div className='col-1 th border'>USER</div>
							<div className='col-2 th border'>TYPE</div>
							<div className='col-2 th border'>DESC.</div>
							<div className='col-1 th border'>EV / CAN</div>
							<div className='col-1 th border'>MONTO</div>
							<div className='col-3 th border'>NOTA</div>
						</div>
					</div>
					{gralLogs.map((eachLog: GralLogInterface) => {
						return <Logs eachLog={eachLog} key={eachLog._id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default GralLogs;
