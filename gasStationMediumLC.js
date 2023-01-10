let gas = [2, 3, 4, 5, 6];
let cost = [7, 6, 5, 4, 3];

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let total = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return total + tank < 0 ? -1 : start;
};

console.log(canCompleteCircuit(gas, cost));
