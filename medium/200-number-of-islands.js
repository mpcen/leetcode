/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

const exploreSurroundings = (matrix, i, j) => {
    // check top
    if(i > 0 && matrix[i-1][j] === '1') {
        matrix[i-1][j] = '0';
        exploreSurroundings(matrix, i-1, j);
    }
    
    // check right
    if(j < matrix[0].length - 1 && matrix[i][j+1] === '1') {
        matrix[i][j+1] = '0';
        exploreSurroundings(matrix, i, j+1);
    }
    
    // check bottom
    if(i < matrix.length - 1 && matrix[i+1][j] === '1') {
        matrix[i+1][j] = '0';
        exploreSurroundings(matrix, i+1, j);
    }
    
    // check left
    if(j > 0 && matrix[i][j-1] === '1') {
        matrix[i][j-1] = '0';
        exploreSurroundings(matrix, i, j-1);
    }
}

var numIslands = function(grid) {
    if(!grid.length) {
        return 0;
    }
    
    let n = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                n++;
                
                exploreSurroundings(grid, i, j);
            }
        }
    }
    
    return n;
};