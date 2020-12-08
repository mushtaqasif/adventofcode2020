const { displayTitle, getData } = require('../lib');
const execute = require('./execute');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(8, 2);

    let data = await getData(__dirname, 'data.txt');
    let result = null;
    let cursor = 0;

    while (cursor < data.length - 1) {
        let [operation, argument] = data[cursor].split(' ');

        if (['nop', 'jmp'].indexOf(operation) > -1) {
            result = execute(data);
            if (result.isLoop) {
                data[cursor] = (operation == 'nop' ? 'jmp' : 'nop') + ' ' + argument;
                result = execute(data);
                data[cursor] = operation + ' ' + argument;
            }
        }

        if (result && result.isLoop == false) {
            break;
        }

        cursor++;
    }

    console.log('Accumulator:', result.accumulator);

    console.timeEnd("Execution time");
};
