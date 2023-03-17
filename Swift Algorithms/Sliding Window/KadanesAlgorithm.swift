//time and space complexity is O(n)

class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {

      var maxSum: Int = Int.min
      var currentSum: Int = 0

      for currentNum in nums {
        currentSum += currentNum

        if currentNum > currentSum {
          currentSum = currentNum
        }

        maxSum = max(currentSum, maxSum)

      }
      return maxSum
    }
}