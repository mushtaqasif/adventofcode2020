const { displayTitle, getData } = require('../lib');
const joltageDifferences = require('./joltage-differences');


module.exports = async function() {
    console.time("Execution time");

    displayTitle(10, 1);

    const data = await getData(__dirname, 'data.txt');
    const answer = joltageDifferences(data);

    console.log('Answer:', answer);

    console.timeEnd("Execution time");
};
