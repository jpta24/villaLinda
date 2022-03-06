import axios from 'axios';
import { HabInterface } from './HabInterface';
/*import { AsinItemInterface } from './AsinItemInterface';
import { AsinsConfirmedInterface } from './AsinsConfirmedInterface'; */

const API = 'http://localhost:5400/habitaciones';

export const getHabs = async () => {
	return await axios.get<HabInterface[]>(API);
};

export const updateHab = async (hab: HabInterface) => {
	return await axios.put<HabInterface>(API, hab);
};

export const getHab = async (id: string) => {
	return await axios.get<HabInterface>(`${API}/${id}`);
};

export const updateHabData = async (id: string, hab: HabInterface) => {
	return await axios.put<HabInterface>(`${API}/${id}`, hab);
};

export const createHab = async (hab: HabInterface) => {
	return await axios.post(API, hab);
};

export const deleteHab = async (id: string) => {
	return await axios.delete<HabInterface>(`${API}/${id}`);
};

/* export const deleteKeyWord = async (id: string) => {
	return await axios.delete<UrlInterface>(`${API}/${id}`);
};

export const updateAsinsConfirmed = async (
	item: AsinItemInterface,
	responseCallback?: string
) => {
	return await axios.put<AsinItemInterface>(API2, item);
};

export const getAsinsConfirmed = async () => {
	return await axios.get<AsinsConfirmedInterface[]>(API2);
};

export const createAsin = async (
	item: AsinItemInterface,
	responseCallback?: string
) => {
	return await axios.post<AsinItemInterface>(API3, item);
}; */

/* export const getVideos = async () => {
	return await axios.get<Video[]>(`${API}/videos`);
};




export const getVideo = async (id: string) => {
	return await axios.get<Video>(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
	return await axios.put<Video>(`${API}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
	return await axios.delete<Video>(`${API}/videos/${id}`);
}; */
