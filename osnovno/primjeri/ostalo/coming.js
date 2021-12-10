
var countDownDate = new Date("Jan 30, 2022 15:37:25").getTime();

// Updatati svake sekunde
var x = setInterval(function() {

  //definirati današnji dan i vrijeme
  var now = new Date().getTime();

  // razlika između danas i dana
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Sve staviti u demo
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Ako završi odbrojavanje
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

 //Typewriter
 
var i = 0;
var txt = 'Coming extremly soon...';
var speed = 120;

function typeWriting() {
    if(i < txt.length) {
        document.getElementById("middle").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriting, speed);
    }

 }
