const { displayTitle, getData } = require('../lib');

function makeRules(data) {
    let rules = {};

    for (let i = 0; i < data.length; i++) {
        const rule = data[i];
        
        const [bag, bags] = rule.split(' bags contain ');
        rules[bag] = {};

        const contains = bags.split(', ');

        for (let j = 0; j < contains.length; j++) {
            const [, qty, color] = contains[j].match(/(\d+)? ?([a-z ]+) bags?/);
            rules[bag][color] = Number(qty || 0);
        }
    }

    return rules;
}

function bagsContain(color, rules) {
    let bags = [];
    for (const rule in rules) {
        if (rules.hasOwnProperty(rule)) {
            const bag = rules[rule];
            bags = [
                ...bags,
                ...(bag.hasOwnProperty(color) ? [rule, ...bagsContain(rule, rules)] : [])
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
    const bags = bagsContain('shiny gold', rules);

    console.log('No. of bag colors:', bags.length);

    console.timeEnd("Execution time");
};