const numbers=document.querySelectorAll(".number");
// console.log(numbers)


const calculatorScreen=document.querySelector('.calculator-screen');

const updateScreen=(number)=>{
    calculatorScreen.value=number
};

let prevNumber='';
let calculationOperator='';
let currentNumber='0';

const inputNumber=(number)=>{
    if(currentNumber==='0'){
        currentNumber=number
    } else{
        currentNumber +=number;
    }
}


numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});


const operators=document.querySelectorAll(".operator");
// console.log(operators)

const inputOperator=(operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber
    }
    // prevNumber=currentNumber;
    calculationOperator=operator;
    currentNumber='0'
}

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    })
})

const equalSign= document.querySelector('.equal-sign');
equalSign.addEventListener('click', ()=>{
    // console.log("tekan");
    calculate();
    updateScreen(currentNumber);
})

const calculate=()=>{
    let result= ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }

    currentNumber=result;
    calculationOperator='';
}

const clearBtn=document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=> {
    // console.log('dipenceet');
    clearAll();
    updateScreen(currentNumber);
});

const clearAll=() =>{
    prevNumber='';
    calculationOperator='';
    currentNumber='0'
}

const decimal=document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber+= dot;
}