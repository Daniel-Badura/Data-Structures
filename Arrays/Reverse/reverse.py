def reverse(str):
    mylist = []
    # for i in range(len(stri) - 1, -1, -1):: This line starts a for loop that iterates over a range of numbers.
    # The loop is designed to iterate from the last character's index in the input string (len(stri) - 1) to the first character's index (-1) in reverse order.
    # The range() function with three arguments is used here: start, stop, and step. In this case, start is len(stri) - 1, stop is -1, and step is -1, which means it will count down from the last character's index to the first character's index.
    # mylist.append(stri[i]): Inside the loop, for each index i in the specified range, the character at that index in the input string stri is extracted using stri[i],
    # and it is appended to the mylist list. This effectively reverses the order of characters.
    for i in range(len(str) - 1, -1, -1):
        mylist.append(str[i])
    return "".join(mylist)


def reverseEasy(str):
    return str[::-1]


stringOne = "yfazs z ązdohcyw yfaryŻ"
stringTwo = "ynaicś an ązdohcw ynaiwaP"

print(reverse(stringOne))
print(reverseEasy(stringTwo))


# or just stri[::-1]
