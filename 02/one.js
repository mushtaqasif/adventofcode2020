const { displayTitle, getData } = require('../lib');

module.exports = async function() {
    console.time("Excution time");

    displayTitle(2, 1);

    const passwords = await getData(__dirname, 'data.txt');

    let valid = 0;

    passwords.forEach(password => {
        const [ruleset, value] = password.split(': ');
        const [rule, character] = ruleset.split(' ');
        const [min, max] = rule.split('-');

        const count = (value.match(new RegExp(character, "g")) || []).length;

        /*
        console.log([Number(min), Number(max), character, value, count, count >= Number(min) && count <= Number(max)]);
        // */

        if (count >= Number(min) && count <= Number(max)) {
            valid++;
        }
    });

    console.log('Valid passwords:', valid);
    console.timeEnd("Excution time");
};