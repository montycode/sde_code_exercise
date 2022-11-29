// Now lets make a function to get the data in our text files to start our algorithm
import fs from 'fs';

const getData = async () => {
    let addresses = (await fs.promises.readFile("./data/shippings.txt", "utf-8")).split(
        '\r');
    // Reading the file drivers and splitting with enters
    let drivers = (await fs.promises.readFile("./data/drivers.txt", "utf-8")).split(
        '\r'
    );
    return [addresses, drivers];
};

export default getData;