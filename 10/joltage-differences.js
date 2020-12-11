module.exports = function(data) {
    let joltages = data.map(i => parseInt(i, 10)).sort((a, b) => a - b);
    joltages.push(Math.max(...joltages) + 3);
    joltages.unshift(0);

    const { one, three } = joltages.reduce((result, jolt) => {
        const diff = jolt - result.prevJolt;

        if (diff == 1) result.one++;
        else if (diff == 3) result.three++;

        result.prevJolt = jolt;

        return result;
    }, { one: 0, three: 0, prevJolt: 0 });

    return { 
        one, three,
        answer: one * three
    };
};
