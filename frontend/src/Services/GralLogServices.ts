import axios from 'axios';
import { GralLogInterface } from './GralLogInterface';

const API = 'http://localhost:5400/logs';

export const updateAll = async (gralLog: GralLogInterface) => {
	return await axios.put<GralLogInterface>(API, gralLog);
};

export const getGralLogs = async () => {
	return await axios.get<GralLogInterface[]>(API);
};
