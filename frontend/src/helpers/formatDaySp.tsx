export const formatDaySp = (dayDate: number | null) => {
	switch (dayDate) {
		case 0:
			return 'Dom';
		case 1:
			return 'Lun';
		case 2:
			return 'Mar';
		case 3:
			return 'Mie';
		case 4:
			return 'Jue';
		case 5:
			return 'Vie';
		case 6:
			return 'Sab';
	}
};
