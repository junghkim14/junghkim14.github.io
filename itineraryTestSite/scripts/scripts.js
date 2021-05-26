"use strict";

let myImage = document.querySelector("img");
myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mapIconResized.png") {
    myImage.setAttribute("src", "images/planeLogoResized.png");
  } else {
    myImage.setAttribute("src", "images/mapIconResized.png");
  }
});
