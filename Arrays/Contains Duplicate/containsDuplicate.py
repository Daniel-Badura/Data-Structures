class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        setNums = len(set(nums))
        if len(nums) != setNums:
            return True
        return False


class SolutionTwo:
    def containsDuplicate(self, nums: list[int]) -> bool:
        return len(set(nums)) != len(nums)


array = [[1, 2, 3, 4, 4], [2, 3, 4, 5], [], [3]]
for element in array:
    solution = Solution()
    solutionTwo = SolutionTwo()
    print(element)
    print(solution.containsDuplicate(element))
    print(solutionTwo.containsDuplicate(element))
