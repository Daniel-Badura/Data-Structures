const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

//Push
strings.push("e");

//Pop
strings.pop();
strings.pop();

//Unshift
strings.unshift("x");

//Splice
strings.splice(2, 0, "alien");

console.log(strings);
