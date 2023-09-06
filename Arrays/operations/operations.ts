const stringsArray: string[] = ["a", "b", "c", "d"];
const numberArray: number[] = [1, 2, 3, 4, 5];

//Push
stringsArray.push("e");

//Pop
stringsArray.pop();
stringsArray.pop();

//Unshift
stringsArray.unshift("x");

//Splice
stringsArray.splice(2, 0, "alien");

console.log(stringsArray);
