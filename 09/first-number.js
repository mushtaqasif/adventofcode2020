module.exports = function(data, preambleSize = 25) {
    if (data.length <= preambleSize ) return;

    for (let i = 0; i < data.length - preambleSize; i++) {
        let preamble = Array.from(data).splice(i, preambleSize);
        let total = Number(data[i + preambleSize]);
        let valid = false;
 
        for (let j = 0; j < preamble.length; j++) {
            const left = Number(preamble[j]);
            const right = total - left;

            valid = left !== right 
                && preamble.indexOf(right.toString()) > -1;
            
            // console.log(`${left} + ${right} = ${total}`, valid);
            
            if (valid) break;
        }

        if (!valid) return total;
    }
};
