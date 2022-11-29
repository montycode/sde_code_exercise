import { countVowels, countConsonants } from '../../helpers';

describe('Test all helpers functions', () => {
    // countVowels
    test('Returns a valid count of vowels', () => {
        expect(countVowels('Omar')).toBe(2);
        expect(countConsonants('Omar')).not.toBe(3);
    });
    // countConsonants
    test('Returns a calid count of consonants', () => {
        expect(countConsonants('Omar')).toBe(2);
        expect(countConsonants('Omar')).not.toBe(3);
    });
});