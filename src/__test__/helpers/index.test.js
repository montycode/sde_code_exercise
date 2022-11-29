import { countVowels } from '../../helpers';

describe('Test all helpers functions', () => {
    test('Returns a valid count of vowels', () => {
        expect(countVowels('Omar')).toBe(2);
    })
});