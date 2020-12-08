module.exports = function (data) {
    let executed = [];
    let cursor = 0;
    let accumulator = 0;

    while (executed.indexOf(cursor) < 0) {
        if (data[cursor] == undefined) break;

        const [operation, argument] = data[cursor].split(' ');

        executed.push(cursor);

        switch (operation) {
            case 'acc':
                accumulator += Number(argument);
                cursor++;
                break;
        
            case 'jmp':
                cursor += Number(argument);
                break;

            case 'nop':
                cursor++;
                break;

            default:
                cursor++;
                break;
        }

        // console.log(operation, argument, accumulator);
    }

    return {
        accumulator,
        isLoop: data.length != cursor
    }
};
