prompt("What is your name?: ");
prompt("What is their name?: ");

var loveScore = Math.random() * 100;
loveScore     = Math.floor(loveScore) + 1;

if(loveScore > 70){
    alert("Your love score is "+ loveScore + "% Pretty cool");
} else if(loveScore > 30 && loveScore <= 70) {
    alert("Your love score is "+ loveScore + "%");
} else {
    alert("Your love score is "+ loveScore + "% you're done bruh");
}

// -----------------------------
var a = 10;
var b = 5;
var c = 7;
var d = 7;
var e = "10";

var bool = (a === b); // data type sensitive
bool     = (a == e);  // ignore data type
bool     = (b !== c);
bool     = (d > c);
bool     = (c < a);
bool     = (c >= d);
bool     = (b <= a);

// -------------------------------
function isLeapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            } else {
                return false;
            }

        } else {
            return true;
        }

    } else {
        return false;
    }
}

//-------------------------------
var names = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(names.length());
console.log(names[0]);
console.log(names.includes("Budi"));

var user = prompt("What's your name?: ");
if(names.includes(user)){
    alert("Welcome!");
} else {
    alert("You're not invited");
}

//--------------------------------
var output = [];
var count  = 1;

function fizzBuzz(){
    while(count <= 100){
        if(count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
    
        } else if(count % 3 === 0){
            output.push("Fizz");
    
        } else if(count % 5 === 0){
            output.push("Buzz");
    
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzBuzz();
console.log(output);

//------------------------------
function whosPaying(names){
    var numOfPeople = names.length();
    var randomPersonPosition = Math.random() * numOfPeople;
    var randomPerson = names[Math.floor(randomPersonPosition)];
    return randomPerson + " is going to buy lunch today!";
}

console.log(whosPaying(names));

//--------------------------------
var i = 1;

while(i < 5){
    console.log(i);
    i++;
}

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//-------------------------------
for(var j = 0; j < 5; j++){
    console.log(j);
}

//-------------------------------
function fibbonacciGenerator(n){
    var output = [];
    if(n === 1){
        output = [0];

    } else if (n === 2){
        output = [0, 1];

    } else {
        output = [0, 1];

        for(var i = 2; i < n; i++){
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output;
}

output = fibbonacciGenerator(6);
console.log(output);

