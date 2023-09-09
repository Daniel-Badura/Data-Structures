import re


def LongestWord(string):
    array = re.findall("\w+", string)
    maximum = max([len(item) for item in array])
    for item in array:
        if len(item) == maximum:
            return item


sss = "Never gonna give!@#!$ you up,let you down or anything"
print(LongestWord(sss))


def LongestWordTwo(sen):
    count = 0
    maximum = 0
    words = []
    word = []
    for char in sen:
        if char.isalnum():
            count += 1
            word.append(char)
        else:
            if word not in words and word:
                words.append("".join(word))

                word = []
            maximum = max(maximum, count)
            count = 0
    maximum = max(maximum, count)
    if word not in words and word:
        words.append("".join(word))

    for item in words:
        if len(item) == maximum:
            return item


# code goes here

# keep this function call here
print(LongestWord(input()))
