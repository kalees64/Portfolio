let display = document.querySelector("main aside");
let out = ``;
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnAdd = document.getElementById("+");
let btnSub = document.getElementById("-");
let btnMul = document.getElementById("x");
let btnDiv = document.getElementById("/");
let btnEqual = document.getElementById("=");
let btnMod = document.getElementById("%");
let btnPoint = document.getElementById("dot");

function btnOne(){
    out+= `1`
    return display.textContent = out
}
function btnTwo(){
    out+= `2`
    return display.textContent = out
}
function btnThree(){
    out+= `3`
    return display.textContent = out
}
function btnFour(){
    out+= `4`
    return display.textContent = out
}
function btnFive(){
    out+= `5`
    return display.textContent = out
}
function btnSix(){
    out+= `6`
    return display.textContent = out
}
function btnSeven(){
    out+=`7`
    return display.textContent = out
}
function btnEight(){
    out+=`8`
    return display.textContent = out
}
function btnNine(){
    out+=`9`
    return display.textContent = out
}
function btnZero(){
    out+=`0`
    return display.textContent = out
}
function btnPlus(){
    out+=`+`
    return display.textContent = out
}
function btnMinus(){
    out+=`-`
    return display.textContent = out
}
function btnMultiply(){
    out+=`x`
    return display.textContent = out
}
function btnDivision(){
    out+=`/`
    return display.textContent = out
}
function btnClear(){
    out = ``
    return display.textContent = out
}
function btnDot(){
    out += `.`
    return display.textContent = out
}
function btnRemove(){
    out = out.slice(0,out.length-1);
    return display.textContent = out
}

function equals(){
    let total = 0;
    console.log(out);
    if (out.includes("+")){
        // console.log("plus");
        let values = out.split("+");
        // console.log(values);
        values.forEach((num)=>{
            num = Number(num)
            total = total + num;
            // console.log(total) 
        })
        out = total;
        total =0;
        return display.textContent = out
    }
    else if (out.includes("x")){
        console.log("plus");
        total = 1;
        let values = out.split("x");
        console.log(values);
        values.forEach((num)=>{
            num = Number(num)
            total = total * num;
            console.log(total) 
        })
        out = total;
        total =0;
        return display.textContent = out
    }
    else if (out.includes("-")){
        console.log("Minus");
        let values = out.split("-");
        console.log(values);
        values.forEach((num)=>{
            num = Number(num)
            if(total === 0){
                total = total + num
            }
            else{
                total = total - num;
            }
            console.log(total) 
        })
        out = total;
        total = 0;
        return display.textContent = out
    }
    else{
        console.log("Minus");
        let values = out.split("/");
        console.log(values);
        values.forEach((num)=>{
            num = Number(num)
            if(total === 0){
                total = total + num
            }
            else{
                total = total / num;
            }
            console.log(total) 
        })
        out = total;
        total = 0;
        return display.textContent = out
    }
}
