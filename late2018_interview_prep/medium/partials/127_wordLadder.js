// 9/36 Test cases passed. RIP.

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// a = 97
// b = 122
var ladderLength = function(beginWord, endWord, wordList) {
    let seen = new Set();
    let count = 1;
    let queue = [ {word: beginWord, wordList: [...wordList], count}, 'end' ];
    
    while(queue.length) {
        let current = queue.shift();
        
        if(!seen.has(current.word) && current !== 'end') {
            seen.add(current.word);

            if(current.word === endWord) {
                return current.count;
            }

            let nextQueueItems = getNext(current.word, current.wordList);
            
            while(nextQueueItems.length) {
                let next = nextQueueItems.shift();
                next.count = count + 1;
                queue.push(next);
            }

            queue.push('end');
        } else {
            count++;
        }
    }

    return 0;
};

function getNext(word, wordList) {
    let next = [];
    let index = 0;
    
    while(index < word.length) {
        let wordSet = new Set([...wordList]);
        let charArr = word.split('');

        for(let i = 97; i <= 122; i++) {
            charArr[index] = String.fromCharCode(i);
            let tmpWord = charArr.join('');
            
            if(wordSet.has(tmpWord)) {
                wordSet.delete(tmpWord);
                next.push({word: tmpWord, wordList: [...wordSet]});
                wordSet.add(tmpWord);
            }
        }
        index++;
    }
    return next;
}