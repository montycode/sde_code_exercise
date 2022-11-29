// (SS) is the number of vowels in the driver’s name
// I'll start creating a callback to count vowels

const countVowels = (driverName) => {
    const count = driverName.match(/[aeiou]/gi).length;
    // return number of vowels in driver's name
    return count;
};

export default countVowels;