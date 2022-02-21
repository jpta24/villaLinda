import React, { useState, useEffect } from 'react';
import * as extraServices from '../Services/ExtraServices';
import { ExtraInterface } from '../Services/ExtraInterface';
import Extra from '../components/Extras';

const ExtraCont = () => {
	const [extras, setExtras] = useState<ExtraInterface[]>([]);

	const loadExtras = async () => {
		const res = await extraServices.getExtras();
		setExtras(res.data);
		// para ordenar los resultados aplica los que esta en el archivo
		//C:\Users\jeanp\Documents\WEB DEVELOPMENT\mydstore\frontend\src\pages\ScanUrl
		//const formatedKW
	};

	useEffect(() => {
		loadExtras();
	}, []);

	console.log(extras);

	return (
		<div className='row mx-auto '>
			{extras.map((eachExtra: ExtraInterface) => {
				return <Extra eachExtra={eachExtra} key={eachExtra._id} />;
			})}
		</div>
	);
};

export default ExtraCont;
