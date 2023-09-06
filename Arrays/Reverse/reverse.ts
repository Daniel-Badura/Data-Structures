function revers(str: string | any[]): string {
    if (!str || (typeof str !== "string" && !Array.isArray(str))) {
      return "not good";
    } else {
      const reversedString = str instanceof Array ? str.reverse().join("") : [...str].reverse().join("");
      return reversedString;
    }
  }
  
  console.log(revers("ynaicś an ązdohcw ynaiwap a yfazs z ązdohcyw yfaryŻ"));
//   console.log(revers(1)); 
  console.log(revers(["1"]));