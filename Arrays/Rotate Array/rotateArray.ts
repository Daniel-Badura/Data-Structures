// class Solution {
//     rotate(nums: number[], k: number): void {
//       const length = nums.length;
      
//       // Calculate the effective rotation amount by taking k modulo the length of the list
//       k = k % length;
      
//       // Reverse the entire array
//       this.reverseArray(nums, 0, length - 1);
      
//       // Reverse the first k elements
//       this.reverseArray(nums, 0, k - 1);
      
//       // Reverse the remaining elements
//       this.reverseArray(nums, k, length - 1);
//     }
  
//     private reverseArray(nums: number[], start: number, end: number): void {
//       while (start < end) {
//         const temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//       }
//     }
//   }
  
// //   
//   class SolutionTwo {
//     rotate(nums: number[], k: number): void {
//       const length = nums.length;
  
//       if (length < k) {
//         k = k % length;
//       }
  
//       if (length === k) {
//         return;
//       }
  
//       nums.splice(0, 0, ...nums.splice(-k));
//     }
//   }
  