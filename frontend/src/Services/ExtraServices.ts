import axios from 'axios';
import { ExtraInterface } from './ExtraInterface';

const API = 'http://localhost:5400/extramercs';

export const getExtras = async () => {
	return await axios.get<ExtraInterface[]>(API);
};

export const updateExtra = async (extra: ExtraInterface) => {
	return await axios.put<ExtraInterface>(API, extra);
};

export const getExtra = async (id: string) => {
	return await axios.get<ExtraInterface>(`${API}/${id}`);
};

export const updateExtraData = async (id: string, hab: ExtraInterface) => {
	return await axios.put<ExtraInterface>(`${API}/${id}`, hab);
};

export const createExtra = async (hab: ExtraInterface) => {
	return await axios.post(API, hab);
};

export const deleteExtra = async (id: string) => {
	return await axios.delete<ExtraInterface>(`${API}/${id}`);
};

/* export const updateKeyWord = async (
	obj: UrlInterface,
	responseCallback?: string
) => {
	return await axios.put<UrlInterface>(API, obj);
};

export const createKeyWord = async (obj: UrlInterface) => {
	return await axios.post(API, obj);
}; */

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


export const createVideo = async (video: Video) => {
	return await axios.post(`${API}/videos`, video);
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
