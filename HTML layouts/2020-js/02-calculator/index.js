/* --------------- */
/* --------------- */
/* Calculator v2.0 */
/* --- JSadept --- */
/* --------------- */
/* --------------- */

const calculatorButtons = [
    {
        name : "delete",
        type : "key",
        symbol : "⌫",
        formula : false,
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "7",
        type : "number",
        symbol : 7,
        formula : 7
    },{
        name : "8",
        type : "number",
        symbol : 8,
        formula : 8
    },{
        name : "9",
        type : "number",
        symbol : 9,
        formula : 9
    },{
        name : "division",
        type : "operator",
        symbol : "÷",
        formula : "/"

    },{
        name : "4",
        type : "number",
        symbol : 4,
        formula : 4

    },{
        name : "5",
        type : "number",
        symbol : 5,
        formula : 5

    },{
        name : "6",
        type : "number",
        symbol : 6,
        formula : 6

    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "1",
        type : "number",
        symbol : 1,
        formula : 1
    },{
        name : "2",
        type : "number",
        symbol : 2,
        formula : 2
    },{
        name : "3",
        type : "number",
        symbol : 3,
        formula : 3
    },{
        name : "subtraction",
        type : "operator",
        symbol : "–",
        formula : "-"
    },{
        name : "0",
        type : "number",
        symbol : 0,
        formula : 0
    },{
        name : "comma",
        type : "number",
        symbol : ".",
        formula : "."
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "addition",
        type : "operator",
        symbol : "+",
        formula : "+"
    },{
        name : "calculate",
        type : "calculate",
        symbol : "=",
        formula : "="
    }
];


// Get elements
const   calcInput = document.querySelector('.calculator .calculator__input'),
        calcOperation = document.querySelector('.calculator .calculator__operation .calculator__value'),
        calcResult = document.querySelector('.calculator .calculator__result .calculator__value');


// Create calc buttons
const createButtons = () => calculatorButtons.forEach((curr, index)=> calcInput.innerHTML += `<button class="calculator__button" id="${curr.type}" name="${curr.name}">${curr.symbol}</button>`);
createButtons();

// Event btn click
calcInput.addEventListener('click', event =>{
    const targetBtn = event.target;
    // console.log(event.target.id);
    calculatorButtons.forEach(currentBtn => {
        if(currentBtn.name === targetBtn.name) {
            calculate(currentBtn);
        }
    })
})
// Temp calc data
const data = {
    operation: [],
    result: []
}
// Calculate function
const calculate = (button) => {
    console.log(button)
    if (button.type == 'number')  {
        data.operation.push(button.symbol)
        data.result.push(button.formula)
    }
    else if (button.type == 'operator'){
        data.operation.push(button.symbol)
        data.result.push(button.formula)
    }
    else if (button.type == 'key'){
        if(button.name == 'clear'){
            data.operation = [];
            data.result = [];
            updateResult(0);
        }
        else{
            data.operation.pop();
            data.result.pop();
        }
    }
    else if (button.type == 'calculate'){
        let result;
        try {
            result = eval(data.result.join(''));
        }
        catch(err){
            if (err instanceof SyntaxError){
                result = 'Syntax Error';
                updateResult(result);
                return;
            }
        }
        result = formatResult(result);
        updateResult(result);
        data.operation.push(result)
        data.result.push(result)
        return;
    }
    else{
    }
    updateOperation(data.operation.join(''));
}

// Update display functions
const updateOperation = (operation) => {
    calcOperation.innerHTML = operation;
}
const updateResult = (result) => {
    calcResult.innerHTML = result;
}

// FormatResult function
const formatResult = (item) => {

    // if item length of more then 13
    if(item.toString().length > 13){

        // if item is float
        if(item % 1 != 0){
            let int = parseInt(item);

            // if int length of more then 10
            if(int > 10) return Number(item.toPrecision(13));

            // else
            else return Number(item.toFixed(13 - int));
        }

        // if item is int
        else{
            return item.toPrecision(8);
        }
    }
    else{
        return item;
    }
}