// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity,
// it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        const val = this.map.get(key);        
        
        if(!val) return -1;
        
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key, value) {
        if(this.map.has(key)) {
            this.map.delete(key);
        } else if(this.capacity === this.map.size) {
            this.map.delete(this.map.keys().next().value);
        }

        this.map.set(key, value);
    }
}

const cache = new LRUCache(2);
console.log(cache.get(2)); // -1
cache.put(2,6);
console.log(cache.get(1)); // -1
cache.put(1,5);
cache.put(1,2);
console.log(cache.get(1)); // 2
console.log(cache.get(2)); // 6