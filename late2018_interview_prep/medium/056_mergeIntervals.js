const merge = intervals => {
    if(!intervals.length || intervals.length === 1) return intervals;
    
    const cache = { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER };
    const mergedIntervals = [];
    
    intervals = sortIntervals(intervals);
    
    intervals.forEach(interval => {
       if(interval.start < cache.min && interval.end > cache.max) {
           cache.min = interval.start;
           cache.max = interval.end;
       } else if(interval.start > cache.max) {
           mergedIntervals.push(new Interval(cache.min, cache.max));
           cache.min = interval.start;
           cache.max = interval.end;
       } else if(interval.end > cache.max) cache.max = interval.end;
    });

    mergedIntervals.push(new Interval(cache.min, cache.max));
    
    return mergedIntervals;
};

function sortIntervals(intervals) {
    return intervals.sort((a, b) => {
        if(a.start <= b.start) return -1;
        if(a.start > b.start) return 1;
        return 0;
    });
}

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

console.log(merge([new Interval(1,1), new Interval(1,15), new Interval(8, 10), new Interval(15, 18)]));