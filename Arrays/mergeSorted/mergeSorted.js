function mergeSortedArrayBad(arr1, arr2) {
  let sortedTogether = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  return sortedTogether;
}
function mergeSortedArrayGood(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let iteratorOne = 1;
  let iteratorTwo = 1;

  let sortedOne = arr1.sort(function (a, b) {
    return a - b;
  });
  let sortedTwo = arr2.sort(function (a, b) {
    return a - b;
  });

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[iteratorOne];
      iteratorOne++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[iteratorTwo];
      iteratorTwo++;
    }
  }
  return mergedArray;
}

const arrayOne = [2, 4, 5, 31];
const arrayTwo = [5, 2, 1, 3]; // not sorted
console.log(mergeSortedArrayBad(arrayOne, arrayTwo));
console.log(mergeSortedArrayGood(arrayOne, arrayTwo));
