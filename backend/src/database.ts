const colors = require('colors/safe');

import mongoose from 'mongoose';
import config from './config';

(async () => {
	try {
		//const db = await mongoose.connect('mongodb://localhost:27017/myapp');
		const db = await mongoose.connect(
			`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
		);
		console.log('database is connected to:', colors.yellow(db.connection.name));
	} catch (error) {
		console.error(error);
	}
})();
