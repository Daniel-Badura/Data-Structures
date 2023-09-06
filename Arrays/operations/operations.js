const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

//Push
strings.push("e"); //O(1)

//Pop
strings.pop(); //O(1)
strings.pop();

//Unshift
strings.unshift("x"); //O(n)

//Splice
strings.splice(2, 0, "x"); //O(n)

console.log(strings);
