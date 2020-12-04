module.exports = function(grid, right = 3, down = 1) {
    let x = 1;
    let y = 1;
    let count = 0;

    while (true) {
        x += right;
        y += down;

        if (y > grid.length) break;

        const row = grid[y - 1];
        const width = row.length;
        const remainder = x % width;
        const location = remainder == 0 ? width : remainder;
        const entity = row.substring(location - 1, location);
        const mark = entity == '#' ? 'X' : 'O';

        count += mark == 'X' ? 1 : 0;

        // console.log(row, x, y, remainder, location, entity, mark);
    }

    return count;
};
