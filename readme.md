# SDE Code Exercise - Omar Montoya

## Description
The application assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers. 
Each driver can only have one shipment and each shipment can only be offered to one driver.

## Installation

```bash
npm install
```

## Test

```bash
npm run test
```

## Challenge Criteria

* If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
* If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
* If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.


## Contribute

If someone wants to add or improve something, I invite them to collaborate directly in this repository.

# License
SDE Code Exercise is released under the MIT license.