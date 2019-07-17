// variables and methods
var hacker1 = "Wick"

//Input required
var hacker2 = prompt("What is the navigators name?");

//Print messages
console.log(`The driver's name is ${hacker2}`);

console.log("The navigator's name is YYYY");


//function for pointing out the longest name
//debugger
function compareNames(hacker1, hacker2){

  if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +hacker1.length+  " characters")
  } else if (hacker1.length >= hacker2.length){
    console.log("Yo, navigator got the longest name, it has " +hacker1.length+  " characters")
  } else {
    console.log("Wow, you both got equally long names, it has " +hacker1.length+  " characters")
  }

}

  compareNames(hacker1, hacker2)

  //for loop , string length
  var result = "";
  for (var i = 0; i < hacker2.length; i++){
    result = result + hacker2[i] + " "
  }

  console.log(result.toUpperCase());


//reverse function with subtraction build in function (works)
/*function reverseString(result) {
  if (result === "")
    return "";
  else
    return reverseString(result.substr(1)) + result.charAt(0);
}
console.log(reverseString(result));
*/
// reverse function with loop (works)
function reverse(result){
  return result.split("").reverse().join("");
}

function alfabetic(result){
  var alphaArray = ["The driver's name goes first", "Yo, the navigator goes first definitely",
                    "What?! You both got the same name?"]
  alphaArray.sort();
  console.log(alphaArray);
}
console.log(reverse(result));
console.log(alfabetic()); 




