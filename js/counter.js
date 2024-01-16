let count = 0;
const year = (new Date()).getFullYear();
let countNumber = document.querySelector("main h1");
let yearSpan = document.querySelector("footer h2 span");
countNumber.textContent = count;
yearSpan.textContent = year;

const incrementFunction = () =>{
    counterNum = Number(countNumber.textContent);
    return countNumber.textContent = counterNum + 1
}
const decrementFunction = () =>{
    counterNum = Number(countNumber.textContent);
    return countNumber.textContent = counterNum - 1
}

