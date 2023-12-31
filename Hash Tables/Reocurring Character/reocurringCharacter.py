# Google Question
# Given an array = [2,5,1,2,3,5,1,2,4]:
# It should return 2

# Given an array = [2,1,1,2,3,5,1,2,4]:
# It should return 1

# Given an array = [2,3,4,5]:
# It should return undefined

# Bonus... What if we had this:
# [2,5,5,2,3,5,1,2,4]
# return 5 because the pairs are before 2,2


def firstRecurringCharacter(inputArray):
    bufor = []
    for element in inputArray:
        if element in bufor:
            return element
        else:
            bufor = bufor + [element]
    return None


print(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
print(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]))
print(firstRecurringCharacter([2, 3, 4, 5]))
print(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))
