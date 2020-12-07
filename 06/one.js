const { displayTitle, getData } = require('../lib');
const answersGenerator = require('./answers-generator');


module.exports = async function() {
    console.time("Execution time");

    displayTitle(6, 1);

    const data = await getData(__dirname, 'data.txt');
    const answersIterator = answersGenerator(data);

    let sum = 0;

    while (true) {
        const answers = answersIterator.next();

        if (answers.done) break;
        sum += answers.value.questions.length;

        // console.log(answers.value);
    }

    console.log('Counts sum:', sum);

    console.timeEnd("Execution time");
};
