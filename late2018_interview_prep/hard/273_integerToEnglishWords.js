// 273. Integer to English Words
// Hard

// 442

// 1130

// Favorite

// Share
// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

const LT20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",
              "Twelve", "Thirteen", "Fourteen", "Fifteen","Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(n) {
    if(n === 0) return "Zero";
    
    let i = 0, word = '';
    
    while(n > 0) {
        if(n % 1000 !==0)
            word = helper(n % 1000) + THOUSANDS[i] + ' ' + word;
            
        n = Math.floor(n / 1000);
        i++
    }
    
    return word.trim();
};

function helper(n) {
    if(n === 0) return '';
    else if(n < 20) return LT20[n] + ' ';
    else if(n < 100) return TENS[Math.floor(n/10)] + ' ' + helper(n%10);
    else return LT20[Math.floor(n/100)] + ' Hundred ' + helper(n%100);
}