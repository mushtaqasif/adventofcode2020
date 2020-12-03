const { displayTitle, getData } = require('../lib');

module.exports = async function() {
    console.time("Excution time");

    displayTitle(2, 2);

    const passwords = await getData(__dirname, 'data.txt');

    let valid = 0;

    passwords.forEach(password => {
        const [ruleset, value] = password.split(': ');
        const [rule, character] = ruleset.split(' ');
        const [min, max] = rule.split('-');

        const one = value[Number(min) - 1];
        const two = value[Number(max) - 1];

        /*
        console.log([Number(min), Number(max), character, value, one, two, (character == one && character != two) || (character != one && character == two)]);
        // */

        if ((character == one && character != two) || (character != one && character == two)) {
            valid++;
        }
    });

    console.log('Valid passwords:', valid);
    console.timeEnd("Excution time");
};
