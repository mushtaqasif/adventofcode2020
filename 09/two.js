const { displayTitle, getData } = require('../lib');
const firstNumber = require('./first-number');
const encryptionWeakness = require('./encryption-weakness');

module.exports = async function() {
    
    console.time("Execution time");

    displayTitle(9, 2);

    const data = await getData(__dirname, 'data.txt');
    const invalidNumber = firstNumber(data);

    console.log('Answer:', encryptionWeakness(data, invalidNumber));

    console.timeEnd("Execution time");
    
};
