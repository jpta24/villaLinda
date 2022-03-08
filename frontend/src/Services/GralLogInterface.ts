import { ExtraInterface } from './ExtraInterface';
import { HabInterface } from './HabInterface';

export interface GralLogInterface {
	_id?: string;
	user: string;
	type: string;
	description: {
		hab?: HabInterface;
		extra?: ExtraInterface;
		outcome?: null;
	};
	note?: string;

	createdAt?: string | Date;
	updatedAt?: string | Date;
}
