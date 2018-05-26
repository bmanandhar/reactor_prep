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
console.log(findPairForSum([3, 1, 12, 5], 13)); // [1, 12]
console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9)); // [4, 5]
//
/*
 * Programming Quiz: Murder Mystery (3-4)
 Directions:
 For this quiz, you're going to help solve a fictitious murder mystery that happened here at Udacity! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

 Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

 four rooms: the ballroom, gallery, billiards room, and dining room,
 four weapons: poison, a trophy, a pool stick, and a knife,
 and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
 We also know that each weapon corresponds to a particular room, so...

 the poison belongs to the ballroom,
 the trophy belongs to the gallery,
 the pool stick belongs to the billiards room,
 and the knife belongs to the dining room.
 And we know that each suspect was located in a specific room at the time of the murder.

 Mr. Parkes was located in the dining room.
 Ms. Van Cleve was located in the gallery.
 Mrs. Sparr was located in the billiards room.
 Mr. Kalehoff was located in the ballroom.
 To help solve this mystery, write a combination of conditional statements that:

 sets the value of weapon based on the room and
 sets the value of solved to true if the value of room matches the suspect's room
 Afterwards, print the following to the console if the mystery was solved:

 __________ did it in the __________ with the __________!
 Fill in the blanks with the name of the suspect, the room, and the weapon. For example,

 Mr. Parkes did it in the dining room with the knife!
 TIP: Make sure to test your code with different values. For example,

 If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console.

 Your Code:
*/

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    if (suspect === "Mr. Parkes"){
        solved = true;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve"){
        solved = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr"){
        solved = true;
    }
} else {
    weapon = "poison";
    solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === false){
    console.log("Thank you.  Have a nice day!");
} else if (isActive === true && balance > 0){
    console.log("Your balance is $"+ balance + ".");
} else if (isActive === false){
    console.log("Your account is no longer active.");
} else if (balance === 0){
    console.log("Your account is empty.");
} else if(balance < 0){
    console.log("Your balance is negative.  Please contact bank.");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate")
    && (vessel === "cone" || vessel === "bowl")
    && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
}


/*
* Programming Quiz: What do I Wear? (3-7)
*
* Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
*   - shirtWidth
*   - shirtLength
*   - shirtSleeve
*
* Use the chart above to print out one of the following correct values:
*   - S, M, L, XL, 2XL, or 3XL
*/

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10.13;

// Write your if/else code here
if (18 <= shirtWidth && shirtWidth < 20 && 28 <= shirtLength && shirtLength < 29 && 8.13 <= shirtSleeve && shirtSleeve < 8.38){
   console.log("S")
}

else if (20 <= shirtWidth && shirtWidth < 22 && 29 <= shirtLength && shirtLength < 30 && 8.38 <= shirtSleeve && shirtSleeve < 8.63){
   console.log("M")
}

else if (22 <= shirtWidth && shirtWidth < 24 && 30 <= shirtLength && shirtLength < 31 && 8.63 <= shirtSleeve && shirtSleeve < 8.88){
   console.log("L")
}

else if (24 <= shirtWidth && shirtWidth < 26 && 31 <= shirtLength && shirtLength < 33 && 8.88 <= shirtSleeve && shirtSleeve < 9.63){
    console.log("XL")
}

else if (26 <= shirtWidth && shirtWidth < 28 && 33 <= shirtLength && shirtLength < 34 && 9.63 <= shirtSleeve && shirtSleeve < 10.13){
   console.log("2XL")
}

else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13){
   console.log("3XL")
}

else {
 console.log("N/A")
}
