const { displayTitle, getData } = require('../lib');
const traverse = require('./traverse');


module.exports = async function() {
    console.time("Execution time");

    displayTitle(3, 1);
    const grid = await getData(__dirname, 'data.txt');
    console.log('Trees encountred:', traverse(grid));

    console.timeEnd("Execution time");
};
