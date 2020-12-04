const { displayTitle, getData } = require('../lib');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(1, 2);

    const values = await getData(__dirname, 'data.txt');

    let buffer = [];
    let collection = [];

    for (let i = 0; i < values.length; i ++) {
        for (let j = 0; j < values.length; j ++) {
            if (j == i) continue;
            const one = Number(values[i]);
            const two = Number(values[j]);
            if (buffer.indexOf(one) > -1 && buffer.indexOf(two) > -1) continue;
            const value = 2020 - one - two;
            if (values.indexOf(value.toString()) > -1) {
                buffer.push(one);
                buffer.push(two);
                buffer.push(value);
                collection.push({
                    numbers: [one, two, value],
                    answer: one * two * value
                })
            }

        }
    }

    console.log(collection);
    console.timeEnd("Execution time");
};
