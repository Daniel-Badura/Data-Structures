// class Solution {
//     containsDuplicate(nums: number[]): boolean {
//       const setNums = new Set(nums);
//       return setNums.size !== nums.length;
//     }
//   }
  
//   class SolutionTwo {
//     containsDuplicate(nums: number[]): boolean {
//       return new Set(nums).size !== nums.length;
//     }
//   }
  
//   const array: number[][] = [[1, 2, 3, 4, 4], [2, 3, 4, 5], [], [3]];
  
//   for (const element of array) {
//     const solution = new Solution();
//     const solutionTwo = new SolutionTwo();
//     console.log(element);
//     console.log(solution.containsDuplicate(element));
//     console.log(solutionTwo.containsDuplicate(element));
//   }