const { displayTitle, getData } = require("../lib");
const arrangments = require('./arrangements');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(10, 2);

    const data = await getData(__dirname, "data.txt");

    console.log("Answer:", arrangments(data));

    console.timeEnd("Execution time");
};
