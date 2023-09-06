function mergeSortedArrayBadTS(arr1: number[], arr2: number[]): number[] {
    let sortedTogether: number[] = arr1.concat(arr2).sort((a, b) => a - b);
    return sortedTogether;
  }
  
function mergeSortedArrayGoodTS(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let arr1Item: number | undefined = arr1[0];
    let arr2Item: number | undefined = arr2[0];
    let iteratorOne: number = 1;
    let iteratorTwo: number = 1;
  
    let sortedOne: number[] = arr1.slice().sort((a, b) => a - b);
    let sortedTwo: number[] = arr2.slice().sort((a, b) => a - b);
  
    while (arr1Item !== undefined || arr2Item !== undefined) {
      if (arr2Item === undefined || (arr1Item !== undefined && arr1Item < arr2Item)) {
        mergedArray.push(arr1Item!);
        arr1Item = arr1[iteratorOne];
        iteratorOne++;
      } else {
        mergedArray.push(arr2Item!);
        arr2Item = arr2[iteratorTwo];
        iteratorTwo++;
      }
    }
    return mergedArray;
  }
  
  const arrayOneTS: number[] = [2, 4, 5, 31];
  const arrayTwoTS: number[] = [5, 2, 1, 3]; // not sorted
  
  console.log(mergeSortedArrayBadTS(arrayOneTS, arrayTwoTS));
  console.log(mergeSortedArrayGoodTS(arrayOneTS, arrayTwoTS));
  