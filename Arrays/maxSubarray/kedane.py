class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        maximum = maxarray = nums[0]
        for i in range(1, len(nums)):
            # print(maxarray)
            maxarray = max(nums[i], maxarray + nums[i])
            maximum = max(maxarray, maximum)
        return maximum


array = [1, 2, 3, 6, -4, -5, 5]
solution_obj = Solution()
result = solution_obj.maxSubArray(array)
print("Maksymalna suma podciągu to:", result)
