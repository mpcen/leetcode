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

/**
 * @param {character[][]} grid
 * @return {number}
 
        xx000
        xx000
        00x00
        000xx

        count: 3
 */
var numIslands = function(grid) {
    let count = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++
                dfs(i, j, grid);
            }
        }
    }
    
    return count;
};

function dfs(i, j, grid) {
    if(grid[i][j] === '1') grid[i][j] = 'x';
    
    // explore right
    if(j !== grid[0].length - 1 && grid[i][j+1] === '1') dfs(i, j+1, grid);
    
    // explore down
    if(i !== grid.length - 1 && grid[i+1][j] === '1') dfs(i+1, j, grid);
    
    // explore left
    if(j !== 0 && grid[i][j-1] === '1') dfs(i, j-1, grid);
    
    // explore up
    if(i !== 0 && grid[i-1][j] === '1') dfs(i-1, j, grid);
}