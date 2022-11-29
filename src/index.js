import getData from "./services/getData.js";
import countConsonants from "./helpers/countConsonants.js";
import countVowels from "./helpers/countVowels.js";
import matchFactor from "./helpers/matchFactor.js";
import isOdd from "./helpers/isOdd.js";

const startApp = async () => {
  // Get Data from text files
  let data = await getData(); 
  // Asign addresses & Drivers
  let addresses = data[0].map((address) => {
    return address.replace("\n", "");
  });
  let drivers = data[1].map((driver) => {
    return driver.replace("\n", "");
  });

  // Validate correct data length.
  if (addresses.length !== drivers.length) {
    console.error(
      "The number of drivers must be the same as the number of addresses."
    );
    process.exit(1);
  }

  // TODO: Refactor this huge code block to async callback 
  let scores = [];

  addresses.forEach((address) => {
    if (!isOdd(address.length)) {
      // Even case
      // (SS) is the number of vowels in the driver’s name multiplied by 1.5.
      let driverSuitability = drivers.map(
        (driver) => countVowels(driver) * 1.5
      );
      // If matches exists the SS is increased by 50% above the base SS.
      let driverHasMatches = drivers.map((driver) =>
        matchFactor(address.length, driver.length)
      );

      // Calculate Suitability
      driverSuitability = driverSuitability.map((suitability, index) => {
        if (driverHasMatches[index]) {
          return (suitability = suitability * 1.5);
        }
        return suitability;
      });

      scores.push({ score: driverSuitability, address: address });
    } else {
      // Odd case
      // (SS) SS is the number of consonants in the driver’s name multiplied by 1.
      let driverSuitability = drivers.map(
        (driver) => countConsonants(driver) * 1
      );
      // If matches exists the SS is increased by 50% above the base SS.
      let driverHasMatches = drivers.map((driver) =>
        matchFactor(address.length, driver.length)
      );
      
      // Calculate Suitability
      driverSuitability = driverSuitability.map((suitability, index) => {
        if (driverHasMatches[index]) {
          return (suitability = suitability * 1.5);
        }
        return suitability;
      });
      // Save Suitability Scores
      scores.push({ score: driverSuitability, address: address });
    }
  });

  let results = [];

  while (results.length !== drivers.length) {
    let scores_max = scores.map((s) => Math.max(...s.score));
    let max_score = Math.max(...scores_max);
    let index_scores_max = scores_max.indexOf(max_score);
    let index_driver = scores[index_scores_max].score.indexOf(max_score);
    let address = scores[index_scores_max].address;
    let driver = drivers[index_driver];

    results.push({ driver, address, ss: max_score });

    scores.splice(index_scores_max, 1);
    scores.forEach((s) => {
      s.score[index_driver] = 0;
    });
  };

  console.log(results);
};

startApp();
