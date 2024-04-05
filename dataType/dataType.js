var myName = "Budi";
alert(myName);

var input = prompt("Answer: ");
alert(input);
alert("Your answer is " + input.toString());

//-------------------------------------

var a = 3;
var b = 8;

console.log(a);
console.log(b);

var temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//------------------------------------

var camelCase;
var snake_case;

//-------------------------------------

var aa = "a";
var bb = "b";
var concat = aa + " " + bb;
console.log(concat);

var concatLength = concat.length;
console.log(concatLength);

//-------------------------------------

var countLength = prompt("Enter your text");
alert("count: " + countLength.length);

//-------------------------------------

var numString = "012345678";
var numSlice  = numString.slice(0,4);
console.log(numSlice);

var limit20 = prompt("Answer: ").slice(0,20);
alert(limit20);

//-------------------------------------

var abc = "abc"
var ABC = abc.toUpperCase;
console.log(ABC);

abc = ABC.toLowerCase;

//------------------------------------- 

var name2 = prompt("What's your name?: ");

name2 = name2.slice(0,1).toUpperCase + name2.slice(1,name2.charAt.length).toLowerCase;
alert(name2);