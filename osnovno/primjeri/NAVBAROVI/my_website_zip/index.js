// finds animated titles on the first screen
var animatedTitles = document.getElementById('animated-title-parent').children;

// converts children from an object to an array
var animatedTitlesArray = Object.values(animatedTitles);

// maps out the array
animatedTitlesArray.map(addAnimationEndListner);

// adds an event listner that listens to animation end on the object
function addAnimationEndListner(element) {
    
    element.addEventListener('animationend', function(){element.remove()});
    element.addEventListener('webkitAnimationEnd', function(){element.remove()});
}
