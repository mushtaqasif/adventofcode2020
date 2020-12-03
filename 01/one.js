const { displayTitle, getData } = require('../lib');

module.exports = async function() {
    console.time("Excution time");

    displayTitle(1, 1);

    const values = await getData(__dirname, 'data.txt');

    let buffer = [];
    let collection = [];

    values.forEach((value, index) => {
        let x = (2020 - Number(value)).toString();

        if (values.indexOf(x) > -1 && buffer.indexOf(x) == -1) {
            buffer.push(x);
            buffer.push(value);
            collection.push({
                numbers: [Number(x), Number(value)],
                answer: Number(x) * Number(value)
            })
        }
    });

    console.log(collection);

    console.timeEnd("Excution time");
};
