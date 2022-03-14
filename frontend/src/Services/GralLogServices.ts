import axios from 'axios';
import { ExtraInterface } from './ExtraInterface';
import { GralLogInterface } from './GralLogInterface';

const API = 'http://localhost:5400/logs';

export const updateAll = async (gralLog: GralLogInterface) => {
	return await axios.put<ExtraInterface>(API, gralLog);
};
