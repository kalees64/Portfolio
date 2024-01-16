let colorNameChange = document.querySelector("main div h1 span");
let colorName = document.querySelector("main div h1");
let backgroundColorChange = document.querySelector("body");
const colors = ["red" , "blue" , "green" , "yellow" , "purple" , "violet" , "gray" , "white" , "orange" , "pink" , "brown" , "rose" , "greenyellow"];

function colorChange(){
    let randomNum = Math.floor(Math.random()*colors.length);
    let randomColor = colors[randomNum];
    colorNameChange.textContent = randomColor.toUpperCase();
    colorName.style.color = "white"
    backgroundColorChange.style.backgroundColor = randomColor;
    colorNameChange.style.color = randomColor;
} 