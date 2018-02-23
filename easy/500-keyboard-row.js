/*

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const ht = {'a':1,'b':2,'c':2,'d':1,'e':0,'f':1,'g':1,'h':1,'i':0,'j':1,'k':1,'l':1,'m':2,'n':2,'o':0,'p':0,'q':0,'r':0,'s':1,'t':0,'u':0,'v':2,'w':0,'x':2,'y':0,'z':2};
    
    let output = [];
    
    for(let word of words) {
        let row = ht[word.charAt(0).toLowerCase()];
        
        for(let char of word.toLowerCase()) {
            if(row !== ht[char]) {
                row = -1;
                break;
            }
        }
        
        if(row >= 0) {
            output.push(word);
        }
    }
    
    return output;
};