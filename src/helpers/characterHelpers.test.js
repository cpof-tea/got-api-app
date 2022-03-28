import { getAliveStatus } from './characterHelpers';

const character1 = {
	born: 'In 286 AC',
	died: 'At Riverlands',
}

const character2 = {
	born: '',
	died: '',
}

const character3 = {
	born: 'In 28BC or 29BC, at Dragonstone',
	died: 'In 44 AC',
}

const character4 = {
	born: 'In 296 AC or 297 AC',
	died: '',
}

test('alive status', () => {
	expect(getAliveStatus(character1)).toBe('No');
	expect(getAliveStatus(character2)).toBe('Unknown');
	expect(getAliveStatus(character3)).toBe('No, died at 72 years old');
	expect(getAliveStatus(character4)).toBe('Alive');
});

