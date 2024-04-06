console.log(document);
console.log(document.firstElementChild);
console.log(document.firstElementChild.firstElementChild);
console.log(document.firstElementChild.lastElementChild.firstElementChild);

var doc     = document;
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye";
heading.style.color = "black";

document.querySelector("input").click();

//---------------------------
document.getElementsByTagName("li");

document.getElementsByTagName("li")[1].style.color = "red";   

document.getElementsByClassName("btn")[0];

document.getElementById("list");

document.querySelector("h1");
document.querySelector(".btn");
document.querySelector("#list");
document.querySelector("li a");
document.querySelector("#list a");

document.querySelector("li a").style.color = "red";

//-----------------------------
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("button").style.backgroundColor = "yellow";

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

//-----------------------------
document.querySelector("li").textContent = "Twitter";

//-----------------------------
document.querySelector("a").setAttribute("href", "http://twitter.com");