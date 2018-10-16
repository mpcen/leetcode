// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
//You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// NOTE: I used weak equality checking (==) instead of strong equality checking (===)
// to handle both true numbers (ex: 3) and string representations of numbers (ex: '3')

const numIslands = grid => {
    let totalIslands = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] != 0 && grid[i][j] != -1)
                totalIslands += numIslandsHelper(grid, i, j);
        }
    }

    return totalIslands;
}

const numIslandsHelper = (grid, row, col) => {
    // base case 1: if out of bounds
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;
    // base case 2: if water
    if(grid[row][col] == 0) return;
    // base case 3: if already explored
    if(grid[row][col] == -1) return;

    // mark it as explored
    grid[row][col] = -1;

    // perform recursive DFS
    numIslandsHelper(grid, row - 1, col); // explore top
    numIslandsHelper(grid, row, col + 1); // explore right
    numIslandsHelper(grid, row + 1, col); // explore bottom
    numIslandsHelper(grid, row, col - 1); // explore left

    return 1;
};