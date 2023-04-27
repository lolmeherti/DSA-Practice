var merge = function(intervals) {
    let returnArr = []
    let prevMergedArr = []
    let currentLow,currentHigh;
    for(let i = 0; i<intervals.length; i++) {
        if (i + 1 === intervals.length && prevMergedArr.length === 0) {
            returnArr.push(intervals[i])
            return returnArr
        } else if (i + 1 === intervals.length) {
            return returnArr
        }
        if (prevMergedArr.length === 0) {
            [currentLow,currentHigh] = intervals[i]
        } else {
            [currentLow,currentHigh] = prevMergedArr
        }
        let [nextLow, nextHigh] = intervals[i + 1]
        if(currentHigh >= nextLow) {
            returnArr.push([currentLow, nextHigh])
            prevMergedArr = [currentLow, nextHigh]
        } else {
            if(prevMergedArr.length === 0) {
                returnArr.push(intervals[i])
            }
            prevMergedArr = []
        }
    }
    return returnArr
};