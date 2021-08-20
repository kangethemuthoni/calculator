var clearButton = document.querySelector("[data-clear]");
var deleteButton = document.querySelector("[data-delete]");
var operationButtons = document.querySelectorAll("[data-operation]");
var numberButtons = document.querySelectorAll("[data-number]");
var equalsButton = document.querySelector("[data-equals]");

var calculationOutput = document.getElementById("calculation-output");
var resultOutput = document.getElementById("result-output");

// Clear Button
clearButton.addEventListener("click", dataClear);

function dataClear () {

    calculationOutput.innerText = "";
    resultOutput.innerText = "";
}

// Delete Button
deleteButton.addEventListener("click", dataDelete);

function dataDelete () {

    resultOutput.innerText = resultOutput.innerText.toString().slice(0, -1);
}

// Equals Button
equalsButton.addEventListener("click", dataTotal);

function dataTotal () {

    calculationOutput.innerText = resultOutput.innerText;

    resultOutput.innerText = eval(resultOutput.innerText);

}

// Operation Buttons
for (var i = 0; i < operationButtons.length; i++) {

    var operationButton = operationButtons[i];

    operationButton.addEventListener("click", dataOperation);
}

function dataOperation (event) {

    var operationClicked = event.target;

    resultOutput.innerText = resultOutput.innerText + operationClicked.innerText;
          

}

// Number Buttons
for (var i = 0; i < numberButtons.length; i++) {

    var numberButton = numberButtons[i];

    numberButton.addEventListener("click", dataNumber);

}

function dataNumber (event) {

    var numberClicked = event.target;

    resultOutput.innerText = resultOutput.innerText + numberClicked.innerText;
}