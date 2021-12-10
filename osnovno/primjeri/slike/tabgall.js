function velikaImg(img) {
    var bigImg = document.getElementById("bigImg");
    var imgText = document.getElementById("imgText");

    bigImg.src = img.src;
    imgText.innerHTML = img.title;

    bigImg.parentElement.style.display = "block";
}