let insertAtOrdered = (intervals, newInterval) => {
    if(newInterval.length === 0)
      {
        return;
      }
    
    for(let i = 0; i <intervals.length - 1; i++ )
          {
            if(intervals[i][0] === newInterval[0])
              {
                intervals.splice(i, 0, newInterval);
                return
              }
            
            if(intervals[i][0] < newInterval[0] && 
              intervals[i+1][0] > newInterval[0])
              {
                 intervals.splice(i+1, 0, newInterval);
                return
              }
          }
    
          if(intervals[intervals.length-1][0] === newInterval[0])
          {
           intervals.push(newInterval);
            return
          }
    
        if(intervals[0][0] > newInterval[0])
          {
             intervals.splice(0, 0, newInterval);
            return
          } else {
            intervals.push(newInterval);
            return
          }
  }
  

  let intervals = [[1, 3],[6, 9]];
  let newIntervals = [2, 5];
  let result = insertAtOrdered(
    intervals,
    newIntervals
  );
  console.log(intervals[1]);