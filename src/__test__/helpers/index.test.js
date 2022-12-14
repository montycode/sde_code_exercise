import { countVowels, countConsonants, isConsonant, isOdd } from '../../helpers';

describe('Test all helpers functions', () => {
    // countVowels
    test('Returns a valid count of vowels', () => {
        expect(countVowels('Omar')).toBe(2);
        expect(countConsonants('Omar')).not.toBe(3);
    });
    // countConsonants
    test('Returns a valid count of consonants', () => {
        expect(countConsonants('Omar')).toBe(2);
        expect(countConsonants('Omar')).not.toBe(3);
    });
    // isConsonant
    test('Returns a true/false based on given consonant', () => {
        expect(isConsonant('M')).toBeTruthy();
        expect(isConsonant('A')).toBeFalsy();
    });
    // isOdd
    test('Returns a true/false based on given value', () => {
        expect(isOdd(4)).toBeTruthy();
        expect(isOdd(1)).toBeFalsy();
    });
});