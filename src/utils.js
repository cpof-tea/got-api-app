export const toNumber = (value) => Number.parseInt(value, 10);

export const identity = (value) => value;

export const guessDate = (value) => {
	const match = value.match(/(\d+)\s?[AB]C/);

	if (!match) return;

	if (match[0].includes('BC'))
		return 0 - toNumber(match[1]);
	else
		return toNumber(match[1]);
}

