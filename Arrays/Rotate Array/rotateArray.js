class Solution {
  rotate(nums, k) {
    const length = nums.length;
    const poppedNums = [];

    if (length < k) {
      k = k % length;
    }

    if (nums.length !== 0) {
      for (let i = 1; i <= k; i++) {
        poppedNums.unshift(nums.pop());
      }
      nums.unshift(...poppedNums);
    }

    return nums;
  }
}

class SolutionTwo {
  rotate(nums, k) {
    const length = nums.length;

    if (length < k) {
      k = k % length;
    }

    if (length === k) {
      return nums;
    }

    nums.splice(0, 0, ...nums.splice(-k));
    return nums;
  }
}

class SolutioThree {
  reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  rotate(nums, k) {
    k = k % nums.length;
    this.reverse(nums, 0, nums.length - 1);
    this.reverse(nums, 0, k - 1);
    this.reverse(nums, k, nums.length - 1);
  }
}
