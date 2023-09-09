// function longestWord(input: string): string | null {
//     const words = input.match(/\w+/g); // Use regex to match words
//     if (!words) return null; // Handle the case when there are no words
//     let maxLength = 0;
//     let longest = '';
  
//     for (const word of words) {
//       if (word.length > maxLength) {
//         maxLength = word.length;
//         longest = word;
//       }
//     }
  
//     return longest;
//   }
  
//   const sss = "Never gonna give!@#!$ you up,let you down or anything";
//   console.log(longestWord(sss));
  
//   // For user input
//   const userInput = prompt("Enter a string:");
//   if (userInput !== null) {
//     console.log(longestWord(userInput));
//   } else {
//     console.log("No input provided.");
//   }