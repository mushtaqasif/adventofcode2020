module.exports = function makeRules(data) {
    let rules = {};

    for (let i = 0; i < data.length; i++) {
        const rule = data[i];
        
        const [bag, bags] = rule.split(' bags contain ');
        rules[bag] = {};

        const contains = bags.split(', ');

        for (let j = 0; j < contains.length; j++) {
            const [, qty, color] = contains[j].match(/(\d+)? ([a-z ]+) bags?/);
            rules[bag][color] = Number(qty || 0);
        }
    }

    return rules;
};
