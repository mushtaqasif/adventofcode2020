const fs = require('fs'); 
const path = require('path');

module.exports = {
    getData: async function(...filepath) {
        return await new Promise((resolve, reject) => {
            fs.readFile(path.resolve(...filepath), "utf8", (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.replace(/\r\n/g,'\n').split("\n"));
                }
            });
        });
    },
    displayTitle: function(day, part) {
        const title = `Day ${day} - Part ${part}`;
        console.log("\n");
        console.log(title);
        console.log(''.padStart(title.length, '~'));
    }
};
