function getMilk(){
    alert("leaveHouse");
    alert("goToMarket");
    alert("buyMilk");
    alert("leaveMarket");
    alert("goToHouse");
}

getMilk();

function getMilkFlavor(flavor){
    alert("leaveHouse");
    alert("goToMarket");
    alert("buyMilk with " + flavor + "flavor");
    alert("leaveMarket");
    alert("goToHouse");
}

getMilkFlavor("vanilla");

//-------------------------------------------

function addition(num1, num2){
    alert(num1 + num2);
}

addition(10, 20);

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have "+ days +" days, "+ weeks +" weeks, and "+ months +" months left.");
}

function getMilkChange(money){
    return money % 1.5;
}

var change = getMilkChange(4);

function floorNum(number){
    return Math.floor(number);
}

var floor = floorNum(4.5);

function calcBottles(startingMoney, costPerBottle){
    var numOfBottles = Math.floor(startingMoney / costPerBottle);
    return numOfBottles;
}

var numBottles = calcBottles(100, 10);