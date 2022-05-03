
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deletebuttons = document.querySelector("[data-delete]");
const clearbuttons = document.querySelector("[data-all-clear]");
const equalbuttons = document.querySelector("[data-equal]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

let display = document.querySelector(".output");
let buttons = Array.from(numberButtons);
let operandButtons = Array.from(operationButtons);

buttons.map( button =>{
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(e.target.innerText);
        switch(e.target.innerText){
            default:
                previousOperandText.innerText += e.target.innerHTML;
        }
    })
})

operandButtons.map(operandButton =>{
    operandButton.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        previousOperandText.innerHTML += e.target.innerHTML;
    })
})



clearbuttons.addEventListener('click', (e) => {
    previousOperandText.innerHTML = "";
})




