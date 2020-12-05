module.exports = function(code, rows = 127, seats = 7) {
    let row = {
        min: 0,
        max: rows 
    };

    let seat = {
        min: 0,
        max: seats
    };

    code.split('').forEach(s => {
        if (s =='F') row.max = (row.max - row.min + 1) / 2 - 1 + row.min;
        else if (s =='B') row.min = (row.max - row.min + 1) / 2 + row.min;
        else if (s =='L') seat.max = (seat.max - seat.min + 1) / 2 - 1 + seat.min;
        else if (s =='R') seat.min = (seat.max - seat.min + 1) / 2 + seat.min;
    });

    const id = row.min * 8 + seat.min;

    // console.log([row.min, seat.min, id]);

    return id;
};
