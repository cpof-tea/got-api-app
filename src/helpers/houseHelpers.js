import { identity } from '../utils';

/**
 * @typedef {object} House
 * @property {string} name The name of this house
 * @property {string} region The region that this house resides in
 * @property {string} coatOfArms Text describing the coat of arms of this house
 * @property {string} words The words of this house
 * @property {string[]} titles The titles that this house holds
 * @property {string[]} seats The seats that this house holds
 * @property {string} diedOut The year that this house died out
 * @property {string} overlord The House resource URL that this house answers to
 * @property {string[]} cadetBranches An array of House resource URLs that was founded from this house
 */

/**
 *
 * @param {House} house
 * @returns
 */
export function getTitles(house) {
	return house.titles.filter(identity).join(', ');
}

/**
 *
 * @param {House} house
 * @returns
 */
export function getSeats(house) {
	return house.seats.filter(identity).join(', ');
}

/**
 *
 * @param {House} house
 * @returns
 */
export function hasOverlord(house) {
	return house.overlord ? 'Yes' : 'No';
}

/**
 *
 * @param {House} house
 * @returns
 */
export function hasDiedOut(house) {
	return house.diedOut ? 'Yes' : 'No';
}

/**
 *
 * @param {House} house
 * @returns
 */
export function countCadetBranches(house) {
	return house.cadetBranches.filter(identity).length.toString();
}

