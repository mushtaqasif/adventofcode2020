const { displayTitle, getData } = require('../lib');
const makeRules = require('./make-rules');

function execute(color, rules) {
    let bags = 0;

    if (rules.hasOwnProperty(color)) {
        for (const bag in rules[color]) {
            const qty = rules[color][bag];
            bags += qty + (qty > 0 ? qty * execute(bag, rules) : 0);
        }
    }

    return bags;
}

module.exports = async function() {
    console.time("Execution time");

    displayTitle(7, 2);

    const data = await getData(__dirname, 'data.txt');
    const rules = makeRules(data);
    const bags = execute('shiny gold', rules);

    console.log('Answer:', bags);

    console.timeEnd("Execution time");
};
