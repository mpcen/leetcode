const numJewelsInStones = function(J, S) {
    const jewlSet = new Set(J.split(''));
    let counter = 0;
    
    for(let stone of S) {
        if(jewlSet.has(stone)) counter++;
    }
    
    return counter;
};