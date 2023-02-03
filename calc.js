//add functionality to dot '.'
//only one dot allowed
//keep dot value in previous op

const numberBtn = document.querySelectorAll(".numberBtn");
const operation = document.querySelectorAll(".operation");

const prevOpDisplay = document.querySelector(".prev-op");
const currOpDisplay = document.querySelector(".current-op");

const equalsBtn = document.querySelector(".equalsBtn");
const clearBtn = document.querySelector(".Clear");
const allClearBtn = document.querySelector(".all-clear");


let op;
let calculation;
let currentOp;
let previousOp;


const allClear = () => {
    currOpDisplay.innerText = '';
    prevOpDisplay.innerText = '';
    op = ''
    currentOp = '';
    previousOp = '';
}

const clear = () => {
    currOpDisplay.innerText = '';
    currentOp = '';
}

const calculate = () => {
    currentOp = Number(currOpDisplay.innerText);

    switch ( op ) {
        case "*":
            calculation = (previousOp * currentOp);
            break;
        case "/":
            calculation = (previousOp / currentOp);
            break;
        case "+":
            calculation = (previousOp + currentOp);
            break;
        case "-":
            calculation = (previousOp - currentOp);
            break;
    }
    currOpDisplay.innerText = `${ calculation }`
}


//Display number clicked on top
//set current op
numberBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentOp = Number(btn.innerText)
        currOpDisplay.innerText += btn.innerText;
    })
})

//set operation
//save previous op
operation.forEach((btn) => {
    btn.addEventListener('click', () => {
        op = btn.innerText;
        previousOp = currentOp

        prevOpDisplay.innerText = `${ previousOp } ${ op }`;
        currOpDisplay.innerText = '';
    })
})

equalsBtn.addEventListener('click', () => {
    calculate();
    prevOpDisplay.innerText = `${ previousOp } ${ op } ${ currentOp }`;
})


allClearBtn.addEventListener('click', () => {
    allClear();
})

clearBtn.addEventListener('click', () => {
    clear();
})