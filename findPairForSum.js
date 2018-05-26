/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(integers, target) {
  // your solution here
  var result = [];
  for (var i = 0; i < integers.length; i ++){
    var x = integers.slice(i + 1, integers.length);
    for (var j = 0; j < x.length; j ++){
      if (integers[i] + x[j] == target){
        result.push(integers[i]);
        result.push(x[j]);
      };
    };
  };
  return result;
};
console.log (findPairForSum([3, 1, 12, 5], 13));
console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9));
