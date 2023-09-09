function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not good";
  } else {
    reversedString = [...str].reverse().join("");
    return reversedString;
  }
}

console.log(reverse("ynaicś an ązdohcw ynaiwap a yfazs z ązdohcyw yfaryŻ"));
console.log(reverse(1));
console.log(reverse(["1"]));
