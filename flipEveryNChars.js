/*
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

example :

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/
//Method-1
function flipEveryNChars(input, number) {
  var flippedString = "";
  for (var i = 0; i < input.length; i += number) {
    var stringOfNChars = input.slice(i, i + number);
    flippedString += stringOfNChars.split('').reverse().join('');
  }
  return flippedString;
}
//Method-2
function flipEveryNChars(input, number) {
  var flippedStr = "";
  var tempStr = "";
  for (var i = 0; i < input.length; i++) {
    tempStr += input[i];
    if (tempStr.length >= number || i >= input.length - 1) {
      flippedStr += tempStr.split("").reverse().join("");
      tempStr = "";
    }
  }
  return flippedStr;
}
