const { displayTitle, getData } = require('../lib');
const seatCodeToId = require('./seat-code-to-id');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(5, 1);

    let highestId = 0;

    const codes = await getData(__dirname, 'data.txt');

    codes.forEach(code => {
            const id = seatCodeToId(code);
            highestId = highestId < id ? id : highestId;
    });

    console.log('Highest seat ID:', highestId);

    console.timeEnd("Execution time");
};