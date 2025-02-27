/*
document.querySelector("html").onclick = function(){
    alert("Ouch! Stop poking me!");
}
*/
const myImage = document.querySelector("img");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/image.png"){
        myImage.setAttribute("src", "images/image change.png");
    }else{
        myImage.setAttribute("src", "images/image.png");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  
if(!localStorage.getItem('name')) {
    setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Welcome To HTML, ' + storedName;
}
  

myButton.onclick = function(){ 
    setUserName();
}