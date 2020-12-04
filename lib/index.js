const fs = require('fs'); 
const path = require('path');
const readline = require('readline');

module.exports = {
    getData: async function(...filepath) {
        return await new Promise((resolve, reject) => {
            /*
            let data = [];

            const rl = readline.createInterface({
                input: fs.createReadStream(path.resolve(...filepath))
            });

            rl.on('line', line => data.push(line));
            rl.on('close', () => resolve(data));
            // */
            //*
            fs.readFile(path.resolve(...filepath), "utf8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.replace(/\r\n/g,'\n').split("\n"));
                }
            });
            // */
        });
    },
    displayTitle: function(day, part) {
        const title = `Day ${day} - Part ${part}`;
        console.log("\n");
        console.log(title);
        console.log(''.padStart(title.length, '~'));
    }
};
