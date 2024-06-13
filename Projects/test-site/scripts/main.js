const myImage = document.querySelector("img");

// image changing 
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox.jpg");
  }
};

// on clicking button the greeting msg will have input name
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);

  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};

