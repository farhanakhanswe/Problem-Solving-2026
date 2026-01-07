def two_sum(nums, target):
    if len(nums) < 2:
        return [1, -1]

    nums_map = {}

    for i, num in enumerate(nums):
        diff = target - num
        if diff in nums_map:
            return [i, nums_map[diff]]
        nums_map[num] = i

    return [-1, -1]
