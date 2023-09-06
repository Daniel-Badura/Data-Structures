arrayOne = [1, 2, 3, 11]
arrayTwo = [3, 7, 9, 12]


def mergeSortedArrayBad(a, b):
    x = a + b
    x.sort()
    return x


def mergeSortedArrayGood(a, b):
    if len(a) == 0 or len(b) == 0:
        return a + b
    merged = []
    iteratorA = 0
    iteratorB = 0

    while iteratorA < len(a) and iteratorB < len(b):
        if a[iteratorA] <= b[iteratorB]:
            merged.append(a[iteratorA])
            iteratorA += 1
        else:
            merged.append(b[iteratorB])
            iteratorB += 1
    return merged + a[iteratorA:] + b[iteratorB:]


print(mergeSortedArrayGood(arrayOne, arrayTwo))
print(mergeSortedArrayBad(arrayOne, arrayTwo))
