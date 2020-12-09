const { displayTitle, getData } = require('../lib');
const firstNumber = require('./first-number');


module.exports = async function() {
    console.time("Execution time");

    displayTitle(9, 1);

    const data = await getData(__dirname, 'data.txt');

    console.log('Answer:', firstNumber(data));

    console.timeEnd("Execution time");
};
