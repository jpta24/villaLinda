import React, { useState, useEffect } from 'react';
import * as extraServices from '../Services/ExtraServices';
import { ExtraInterface } from '../Services/ExtraInterface';
import Extra from '../components/Extras';
import User from '../components/User';

const ExtraCont = () => {
	const user = User();

	const [extras, setExtras] = useState<ExtraInterface[]>([]);

	const loadExtras = async () => {
		const res = await extraServices.getExtras();
		setExtras(res.data);
	};

	useEffect(() => {
		loadExtras();
	}, []);

	const buyExtra = async (
		e: React.MouseEvent<HTMLElement>,
		extra: ExtraInterface
	) => {
		e.preventDefault();

		const newLog = {
			user: user,
			type: 'Income Extra',
			description: {
				extra: extra,
			},
		};

		await extraServices.updateExtra(newLog);
		loadExtras();
	};

	return (
		<div className='row mx-auto '>
			{extras.map((eachExtra: ExtraInterface) => {
				return (
					<Extra
						eachExtra={eachExtra}
						key={eachExtra._id}
						buyExtra={buyExtra}
					/>
				);
			})}
		</div>
	);
};

export default ExtraCont;
