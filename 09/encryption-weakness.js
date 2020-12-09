module.exports = function execute(data, invalidNumber) {
    for (let i = 0; i < data.length; i++) {
        let cursor = i;
        let total = 0;

        while (total < invalidNumber) {
            total += Number(data[cursor]);
            cursor++;
        }

        if (total == invalidNumber) {
            const contiguousSet =  Array.from(data).splice(i, cursor - i).sort((a, b) => a - b);
            const min = Number(contiguousSet[0]);
            const max = Number(contiguousSet[contiguousSet.length - 1]);
            const encryptionWeakness = min + max;

            return encryptionWeakness;
        }
    }
};
