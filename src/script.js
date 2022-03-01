const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

buttons.forEach(button => {
    button.addEventListener('click', compute);
});

function compute() {
    let buttonText = this.innerText;
    switch(buttonText) {
        case 'RESET':
            reset();
            break;
        case 'DEL':
            del();
            break;
        case '=':
            equals();
            break;
        default:
            append(buttonText);
    }
}

function reset() {
    output.innerText = '0';
}

function del() {
    if(output.innerText !== '0') {
        output.innerText = output.innerText.slice(0, -1);
        if(output.innerText.length == 0) {
            output.innerText = '0';
        }
    }
}

function append(operand) {
    if(output.innerText === '0' && !checkOperand(operand)) {
        output.innerText = '';
    }   
    else if(checkOperand(output.innerText[output.innerText.length - 1]) 
            && checkOperand(operand)) {
        output.innerText = output.innerText.slice(0, -1);
    } 

    if(operand === 'x') {
        output.innerText += '*';
    } else if (output.innerText.length < 22){
        output.innerText += operand;
    }
}

function equals() {
    const result = eval(output.innerText);
    if(!isFinite(result)) {
        output.innerText = 'Cannot divide by zero';  
    } else {
        output.innerText = result;
    }
}

function checkOperand(operand) {
    return isNaN(Number(operand));
}