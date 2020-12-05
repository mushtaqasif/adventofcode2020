const { displayTitle, getData } = require('../lib');
const seatCodeToId = require('./seat-code-to-id');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(5, 1);

    const codes = await getData(__dirname, 'data.txt');

    let ids = [];

    codes.forEach(code => ids.push(seatCodeToId(code)));
    ids.sort((a,b) => a - b);

    let seat = null;
    let prevId = ids[0];
    
    for (let index = 1; index < ids.length; index++) {
        const id = ids[index];

        prevId++;

        if (prevId != id ) {
            seat = id -1;
            break;
        }        
    }

    console.log('Your seat ID:', seat);

    console.timeEnd("Execution time");
};