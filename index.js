const display = document.getElementById('display');

function appendToDisplay(input) {
    console.log("Value:", input);
    display.value= display.value + input;

}

function calculate() {
    console.log("Calculate");
    display.value = eval(display.value);

    
}

function clearDisplay() {
    console.log("Clear Display");
    display.value = '';
}
    
