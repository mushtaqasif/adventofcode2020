module.exports = function* answersGenerator(data) {
    let cursor = 0;

    while (cursor < data.length) {
        let answers = new Set();
        let forms = [];

        while (true) {
            if (data[cursor] == '' || cursor >= data.length) {
                break;
            }
            
            const questions = data[cursor].split('');
            
            for (let index = 0; index < questions.length; index++) {
                const question = questions[index];
    
                answers.add(question);
            }

            forms.push(data[cursor])
            cursor++;
        }

        yield {
            questions: Array.from(answers).join(''),
            forms
        };

        cursor++;
    }
};
