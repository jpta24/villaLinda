export interface HabInterface {
	_id?: string;
	number: number;
	status: string;
	priceFraction: number;
	priceFull: number;
	hrIn: null | Date;
	hrOut: null | Date;
	hrMantto: null | Date;
	timesRented: number;
	createdAt?: string | Date;
	updatedAt?: string | Date;
	reference?: string;
}
