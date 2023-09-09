# good solution
class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        length = len(nums)
        poppedNums: list[int] = []
        if length < k:
            k = k % length
        if len(nums) != 0:
            for i in range(1, k + 1):
                poppedNums = [nums.pop()] + poppedNums
            nums[:] = poppedNums + nums
        return nums


# Better solution:
# Runtime Details# 186ms# Beats 64.14%of users with Python3
# Memory# Details# 27.67MB# Beats 92.93%of users with Python3


class SolutionTwo:
    def rotate(self, nums: list[int], k: int) -> None:
        length = len(nums)
        if length < k:
            k = k % length
        if length == k:
            return nums
        nums[:] = nums[-k:] + nums[:-k]
        return nums


# Fast solution:


class SolutionThree:
    def rotate(self, nums: list[int], k: int) -> None:
        # Calculate the effective rotation amount by taking k modulo the length of the list
        k = k % len(nums)

        # Reverse the entire list
        nums.reverse()
        print(nums)
        # Reverse the first k elements
        nums[:k] = reversed(nums[:k])
        print(nums)
        # Reverse the remaining elements
        nums[k:] = reversed(nums[k:])
        print(nums)


array = [[-1, -100], [4, 5, 6, 7, 1, 2, 3], [1, 2, 3, 4, 5, 6, 7]]
k = [3, 3, 3]
solution = Solution()
solutionTwo = SolutionTwo()
solutionThree = SolutionThree()
for i in range(0, len(array)):
    print(f"case {i}")
    print(solutionThree.rotate(array[i], k[i]))
