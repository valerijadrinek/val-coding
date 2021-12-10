document.getElementById("demo").innerHTML="Hello world!!!";

//demo 2
let x,y,z
x = 6;
y = 5;
z = x + y;

document.getElementById("demo2").innerHTML = "Vrijednost od z je " + z + "."

//demo 3
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
var name = "John Doe, so I am..."

document.getElementById("demo3").innerHTML = "Zbroj je jednak " + total + "." + "<br>" + name;

//demo4-var nedeklarirana vraća UNDEFINED
var price;

document.getElementById("demo4").innerHTML = price;

//demo 5-stringovi concaterate + typeof
var txt1 = "What a very";
txt1 += " nice day!";

document.getElementById("demo5").innerHTML = txt1 + "<br>" + typeof txt1;

//demo 6 - object + object method
const car = {type:"Fiat", model:"500", color:"white",
fullName: function (){
    return this.type + " " + this.model;
}
};

document.getElementById("demo6").innerHTML = "This car is " + car.type + " " + car["model"] + " with " + car.color + " color." + "<br>" + car.fullName();

//button-funkcija s argumentima

function myFunction(name, job) {
    document.getElementById("demo7").innerHTML = "Welcome " + name + ", the " + job + "!";
}

//button8- dodavanje argumenata
var c = newFunction(4,3);

document.getElementById("demo8").innerHTML = "Umnožak 4 i 3 je " + c + "." + "<br>" + toCelsius(77);

function newFunction(a,b){
    return a*b;
}

function toCelsius(t){
    return (5/9) * (t-32);
}

//demo9 - \before "" or ''
var text1 = "It\'s alright!";
var text2 = "We used to call \"The Beatles \" the kings...";

document.getElementById("demo9").innerHTML = text1 + "<br>" + text2;

//demo10- indexOf

let str = "Find where west is shown west...";

document.getElementById("demo10").innerHTML = "West se nalazi na poziciji " + str.indexOf("west") + ".";

//demo11-button2 / pretraži sa match;
function searchIn() {
var str = "The rain in SPAIN stays mainly in the plain";
var mac = str.match(/ain/g);

document.getElementById("demo11").innerHTML = "Rezult for matching ain are : " + mac + ".";
}

//demo12 - replace string
function replacingIn() {
    let text = document.getElementById("demo12").innerHTML;

    document.getElementById("demo12").innerHTML = text.replace("us", "them");
}

//demo13- UPPERCASE
function upperFnc() {
    let texter = document.getElementById("demo13").innerHTML;

    document.getElementById("demo13").innerHTML = texter.toUpperCase();
}

//demo14 - split string as a array
let newTxt = "slatkiš";
let ar = newTxt.split("");

text5 = "";
for (let i = 0; i < ar.length; i++) {
    text5 += ar[i] + "/ ";
}

document.getElementById("demo14").innerHTML = text5;

//NUMBERS
