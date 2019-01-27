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
 
 
 [[1, 4], [2, 3]] => [[1, 4]]
 
 startTimes: [1, 2]
                 i
 
 endTimes:   [3, 4]
                 i
              
 merged:      [[1, 4]]

 
 */
var merge = function(intervals) {
    if(!intervals.length || intervals.length === 1) return intervals;
    
    let merged = [];
    let startTimes = [], endTimes = [];
    
    intervals = sort(intervals);
    
    for(let i = 0; i < intervals.length; i++) {
        startTimes.push(intervals[i].start);
        endTimes.push(intervals[i].end);
    }
    
    endTimes = sort(endTimes);
    startTimes = sort(startTimes);
    
    merged.push(new Interval(startTimes[0], endTimes[0]));
    
    for(let i = 1; i < startTimes.length; i++) {
        if(startTimes[i] <= merged[merged.length - 1].end) {
            merged[merged.length - 1].end = endTimes[i];
        } else {
            merged.push(new Interval(startTimes[i], endTimes[i]));
        }
    }
    
    return merged;
};

function sort(intervals) {
    return intervals.sort((a, b) => {
        if(a.start < b.start || a < b) return -1;
        if(a.start > b.start || a > b) return 1;
        return 0;
    });
}