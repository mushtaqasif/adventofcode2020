const { displayTitle, getData } = require('../lib');
const makeRules = require('./make-rules');

function execute(color, rules) {
    let bags = [];
    for (const rule in rules) {
        if (rules.hasOwnProperty(rule)) {
            const bag = rules[rule];
            bags = [
                ...bags,
                ...(bag.hasOwnProperty(color) ? [rule, ...execute(rule, rules)] : [])
            ];
        }
    }
    return Array.from(new Set(bags));
}

module.exports = async function() {
    console.time("Execution time");

    displayTitle(7, 1);

    const data = await getData(__dirname, 'data.txt');
    const rules = makeRules(data);
    const bags = execute('shiny gold', rules);

    console.log('Answer:', bags.length);

    console.timeEnd("Execution time");
};