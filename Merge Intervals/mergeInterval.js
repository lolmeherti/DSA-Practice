var insert = function(intervals, newInterval) 
{
  	if(intervals.length === 0)
        {
          return [newInterval];
        }
  		
  	insertAtOrdered(intervals, newInterval);
  
    let resultArray =[intervals[0]];
	
  	for(let i=1; i<intervals.length; i++)
        {
          let currentArray = intervals[i]
          
          if(decideIfMerge(currentArray,resultArray[resultArray.length-1]))
            {
              resultArray[resultArray.length-1] = mergeItems(currentArray,resultArray[resultArray.length-1]);
            } else {
              resultArray.push(currentArray)
            }
        }
  	return resultArray
};

let decideIfMerge = ([mainItemLow, mainItemHigh], [compareItemLow, compareItemHigh]) => {
      if(mainItemLow < compareItemLow) 
        {
          if(mainItemHigh >= compareItemLow)
            {
              return true
            } else {
              return false
            }
        } else {
          if(compareItemHigh >= mainItemLow)
          {
            return true
          } else {
            return false
          }
        }
}

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


let mergeItems = ([mainItemLow, mainItemHigh], [compareItemLow, compareItemHigh]) => {
  return [Math.min(mainItemLow,compareItemLow), Math.max(mainItemHigh,compareItemHigh)]
}