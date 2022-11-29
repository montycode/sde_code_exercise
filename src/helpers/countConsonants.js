// (SS) is the number of consonants in the driver’s name multiplied by 1.
// Next I'll create a callback to count vowels

import isConsonant from "./isConsonant.js";

const countConsonants = (driverName) => {
    let count = 0;
    for (const character of driverName)
      // To check if character is Consonant and return the total count.
      if (isConsonant(character)) ++count;
    return count;
}

export default countConsonants;