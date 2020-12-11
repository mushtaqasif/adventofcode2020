let jolts = null;
let buffer = {};

function dp(i) {
    if (i == jolts.length - 1) return 1;

    if (buffer.hasOwnProperty(i)) {
        return buffer[i];
    }

    const currentJolt = jolts[i];
    let total = 0;

    for (let j = i + 1; j < jolts.length; j++) {
        const jolt = jolts[j];
        const diff = jolt - currentJolt;
        if (diff <= 3) total += dp(j);
    }

    buffer[i] = total;

    return total;
}

module.exports = function(data) {
    jolts = data.map(i => parseInt(i, 10)).sort((a, b) => a - b);
    jolts.push(Math.max(...jolts) + 3);
    jolts.unshift(0);

    return dp(0);
};
