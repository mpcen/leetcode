/*

A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.

*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const ht = {};
	let results = [];

    for(let i = 0; i < S.length; i++) {
    	if(!ht.hasOwnProperty(S.charAt(i))) {
    		ht[S.charAt(i)] = {min: i, max: i};
    	} else {
    		ht[S.charAt(i)].max = i;
    	}
    }

	for(char in ht) {
		if(!results.length || ht[char].min > results[results.length - 1].max) {
			results.push({min: ht[char].min, max: ht[char].max});
		} else if(ht[char].min < results[results.length - 1].max && ht[char].max > results[results.length - 1].max) {
			 results[results.length - 1].max = ht[char].max
		}
	}

	return results.map(result => {
		return result.max - result.min + 1;
	});
};