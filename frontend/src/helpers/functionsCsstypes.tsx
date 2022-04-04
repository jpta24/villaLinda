export const logsCssType = (string: String) => {
	switch (string) {
		case 'Income Hab':
			return 'rIncome';

		case 'Income Extra':
			return 'rIncome';

		case 'Outcome':
			return 'rOutcome';

		case 'Edit':
			return 'rEdit';

		default:
			return 'r2';
	}
};
