// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// O(n) solution
const lengthOfLongestSubstring = (str) => {
    const set = new Set();
    let currentCount = 0;
    let highestCount = 0;

    for(let char of str) {
        if(!set.has(char)) {
            set.add(char);

            currentCount++

            if(currentCount > highestCount) {
                highestCount = currentCount;
            }
        } else {
            for(let item of set) {
                set.delete(item);

                currentCount--;

                if(item === char) {
                    break;
                }
            }

            set.add(char);
            currentCount++;
        }
    }

    return highestCount;
}

console.log(lengthOfLongestSubstring('a'));

// O(n^2) solution
// const lengthOfLongestSubstring = (str) => {
//     const set = new Set();
//     let substr = '';
//     let longestLength = 0;
//     let currentLength = 0;

//     for(let i = 0; i < str.length; i++) {
//         substr += str.charAt(i);
//         set.add(str.charAt(i));
//         currentLength++;

//         for(let j = i + 1; j < str.length; j++) {
//             const nextChar = str.charAt(j);

//             if(!set.has(nextChar)) {
//                 substr += nextChar;
//                 set.add(nextChar);
//                 currentLength++;
//             } else {
//                 if(currentLength > longestLength) {
//                     longestLength = currentLength;
//                     currentLength = 0;
//                     substr = '';
//                     set.clear();
//                 }
//             }
//         }
//     }

//     return longestLength;
// }