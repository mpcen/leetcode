/*

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const sortIntervals = intervals => {
    return intervals.sort((a, b) => {
        if(a.start < b.start) return -1;
        else if(a.start > b.start) return 1;
        else return 0;
    });
}

var merge = function(intervals) {
    if(!intervals.length) {
        return intervals;
    }
    
    const cache = {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER
    };
    
    let mergedIntervals = [];
    
    intervals = sortIntervals(intervals);
    
    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];

        if(interval.start < cache.min && interval.end > cache.max) {
        	cache.min = interval.start;
        	cache.max = interval.end;        	
        } else if(interval.start <= cache.max && interval.end > cache.max) {
        	cache.max = interval.end;
        } else if(interval.start > cache.max) {
        	mergedIntervals.push([cache.min, cache.max]);

        	cache.min = interval.start;
        	cache.max = interval.end;
        }
    }
        
    mergedIntervals.push([cache.min, cache.max]);
    
    return mergedIntervals;
};