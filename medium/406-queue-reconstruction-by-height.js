/*

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if(!people.length) {
        return people;
    }
    
    people = people.sort((a, b) => {
        if(a[0] > b[0]) return -1;
        else if(a[0] < b[0]) return 1;
        else {
            if(a[1] > b[1]) return 1;
            else if(a[1] < b[1]) return -1;
            else return 0;
        }
    });
    
    const result = [];

    for(let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 0, people[i])
    }

    return result;
};