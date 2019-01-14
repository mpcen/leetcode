// 535. Encode and Decode TinyURL
// Medium

// 370

// 777

// Favorite

// Share
// Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

const urls = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const shortUrl = 'http://tinyurl.com/' + Date.now(36);
    urls.set(longUrl, shortUrl);
    urls.set(shortUrl, longUrl);
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urls.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */