class Solution {
  moveZeroes(nums) {
    const zeroCount = nums.filter((num) => num === 0).length;
    nums = nums.filter((num) => num !== 0).concat(Array(zeroCount).fill(0));
    return nums;
  }
}

class SolutionTwo {
  moveZeroes(nums) {
    let index = 0;

    // Place non-zero elements at the start of the array
    for (const num of nums) {
      if (num !== 0) {
        nums[index] = num;
        index++;
      }
    }

    // Fill the remaining positions with zeroes
    while (index < nums.length) {
      nums[index] = 0;
      index++;
    }

    return nums;
  }
}

const array = [1, 2, 0, 0, 0, 3, 6, 0, -4, -5, 5];
const solutionOne = new Solution();
const solutionTwo = new SolutionTwo();
const resultOne = solutionOne.moveZeroes(array.slice());
const resultTwo = solutionTwo.moveZeroes(array.slice());
console.log(resultOne);
console.log(resultTwo);
