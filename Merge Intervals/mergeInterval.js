function merge(intervals) {
    intervals.sort(([a, b], [c, d]) => a - c);
  
    const mergedIntervals = [];
    let [currentLow, currentHigh] = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      const [nextLow, nextHigh] = intervals[i];
  
      if (currentHigh >= nextLow) {
        currentHigh = Math.max(currentHigh, nextHigh);
      } else {
        mergedIntervals.push([currentLow, currentHigh]);
        [currentLow, currentHigh] = [nextLow, nextHigh];
      }
    }
  
    mergedIntervals.push([currentLow, currentHigh]);
    return mergedIntervals;
  }