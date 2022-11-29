// If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, 
// the (SS) is increased by 50% above the base SS.

const matchFactor = (address, name) => {
    let addressMatches = [];
    let nameMatches = [];

    for (let i = 2; i <= address; i++) {
        if (address % i === 0) {
            addressMatches.push(i);
        }
      }
    
      for (let j = 2; j <= name; j++) {
        if (name % j === 0) {
            nameMatches.push(j);
        }
      }
    
      return addressMatches.filter((value) => nameMatches.includes(value)).length > 0;

};

export default matchFactor;