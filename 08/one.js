const { displayTitle, getData } = require('../lib');
const execute = require('./execute');



module.exports = async function() {
    console.time("Execution time");

    displayTitle(8, 1);

    const data = await getData(__dirname, 'data.txt');

    console.log('Accumulator:', execute(data).accumulator)

    console.timeEnd("Execution time");
};
