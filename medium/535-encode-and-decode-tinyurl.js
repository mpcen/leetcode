/*

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

*/

const longUrl2ShortUrl = {};
const shortUrl2LongUrl = {};

var encode = function(longUrl) {
    if(longUrl2ShortUrl.hasOwnProperty(longUrl)) {
        return longUrl2ShortUrl[longUrl];
    }
    
    let success = false;
    
    while(!success) {
        let hash = Math.random().toString().split('.')[1].slice(0,6);
        let tinyUrl = 'http://tinyurl.com/' + hash;
        
        if(!shortUrl2LongUrl.hasOwnProperty(tinyUrl)) {
            longUrl2ShortUrl[longUrl] = tinyUrl;
            shortUrl2LongUrl[tinyUrl] = longUrl;
            success = true;
        }
    }
    
    return longUrl2ShortUrl[longUrl];
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortUrl2LongUrl[shortUrl] || null;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */