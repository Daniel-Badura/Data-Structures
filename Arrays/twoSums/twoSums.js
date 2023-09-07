const numbers = [
  [2, 7, 11, 15],
  [3, 2, 4],
  [3, 3],
];
const targets = [9, 6, 6];

var twoSum = function (nums, target) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }
};

for (let i = 0; i < numbers.length; i++) {
  console.log(twoSum(numbers[i], targets[i]));
}
