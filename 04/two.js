const { displayTitle, getData } = require('../lib');
const passportGenerator = require('./passport-generator');

module.exports = async function() {
    console.time("Execution time");

    displayTitle(4, 2);

    const data = await getData(__dirname, 'data.txt');
    const passportIterator = passportGenerator(data, true);

    let count = 0;

    while (true) {
        const passport = passportIterator.next();

        if (passport.done) break;
        count += passport.value.valid ? 1 : 0;

        // if (!passport.value.valid) console.log(passport.value);
    }

    console.log('Valid passports:', count);

    console.timeEnd("Execution time");
};
