const { displayTitle, getData } = require('../lib');
const answersGenerator = require('./answers-generator');


module.exports = async function() {
    console.time("Execution time");

    displayTitle(6, 2);

    const data = await getData(__dirname, 'data.txt');
    const answersIterator = answersGenerator(data);

    let counts = [];

    while (true) {
        const answers = answersIterator.next();
        if (answers.done) break;

        let count = 0;

        for (let i = 0; i < answers.value.questions.length; i++) {
            const question = answers.value.questions[i];
            let answered = 0;

            for (let j = 0; j < answers.value.forms.length; j++) {
                const form = answers.value.forms[j];

               if (form.indexOf(question) > -1) answered++;
            }

            if (answered == answers.value.forms.length) count++;
        }

        counts.push(count);
    }

    console.log('Counts sum:', counts.reduce((a, b) => a + b, 0));

    console.timeEnd("Execution time");
};
