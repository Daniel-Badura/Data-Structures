class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        zero_count = nums.count(0)
        nums[:] = [num for num in nums if num != 0] + [0] * zero_count
        return nums


class SolutionTwo:
    def moveZeroes(self, nums: list[int]) -> None:
        index = 0

        # Place non-zero elements at the start of the list
        for num in nums:
            if num != 0:
                nums[index] = num
                index += 1

        # Fill the remaining positions with zeroes
        while index < len(nums):
            nums[index] = 0
            index += 1

        return nums


array = [1, 2, 0, 0, 0, 3, 6, 0, -4, -5, 5]
solution_one = Solution()
solution_two = SolutionTwo()
result_one = solution_one.moveZeroes(array)
result_two = solution_two.moveZeroes(array)
print(result_one)
print(result_two)
