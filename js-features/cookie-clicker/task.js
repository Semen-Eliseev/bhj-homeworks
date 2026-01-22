const clickOnCookie =  document.getElementById("cookie");
const widthCookie = clickOnCookie.width;
const element = document.getElementById("clicker__counter");
clickOnCookie.width = widthCookie;
 
clickOnCookie.onmousedown = function() {
    element.textContent++;
    clickOnCookie.width = 300;
}

clickOnCookie.onmouseup = function() {
    clickOnCookie.width = widthCookie;
}