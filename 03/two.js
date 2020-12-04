const { displayTitle, getData } = require('../lib');
const traverse = require('./traverse');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(3, 2);

    const grid = await getData(__dirname, 'data.txt');
    const trees = [
        traverse(grid, 1, 1),
        traverse(grid, 3, 1),
        traverse(grid, 5, 1),
        traverse(grid, 7, 1),
        traverse(grid, 1, 2),
    ];
    const answer = trees.reduce((total, count) => total * count);


    console.log('Trees encountred:', trees);
    console.log('Answer:', answer);

    console.timeEnd("Execution time");
};
