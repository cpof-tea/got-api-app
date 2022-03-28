import { identity, guessDate } from '../utils';

/**
 * @typedef {object} Character
 * @property {string} name The name of this character
 * @property {string[]} aliases The aliases that this character goes by
 * @property {string} gender The gender of this character
 * @property {string} culture The culture that this character belongs to
 * @property {string} born Textual representation of when and where this character was born
 * @property {string} died Textual representation of when and where this character died
 * @property {string[]} allegiances An array of House resource URLs that this character is loyal to
 */

/**
 *
 * @param {Character} character
 * @returns
 */
export function getAliveStatus(character) {
	if (character.born && character.died) {
		const birthAge = guessDate(character.born);
		const deathAge = guessDate(character.died);

		if (!birthAge || !deathAge) return 'No';

		return `No, died at ${deathAge - birthAge} years old`;
	}

	if (!character.born && character.died)
		return 'No';

	if (character.born && !character.died)
		return 'Alive';

	return 'Unknown';
}

/**
 *
 * @param {Character} character
 * @returns
 */
export function getName(character) {
  return [character.name, ...character.aliases]
		.filter(identity)
		.join(', ');
}

/**
 *
 * @param {Character} character
 * @returns
 */
export function getAllegiances(character) {
	return character.allegiances
		.filter(identity)
		.map((allegiance) => allegiance.match(/\d+$/)[0]);
}

