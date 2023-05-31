let $ = document;
let inputElem = $.getElementById("converter");
let resultElem = $.querySelector(".result");
let changeBtn = $.querySelector(".changeButton");
let resetBtn = $.querySelector(".resetButton");
let convertBtn = $.querySelector(".convertButton");
let cSpan = $.querySelector(".C");
let fSpan = $.querySelector(".F");
let changeFlag = true; //true:C  &  false:F
let result;

function change() {
    if (changeFlag) {
        changeFlag = false;
        $.title = "°F to °C";
        cSpan.innerHTML = "°F";
        fSpan.innerHTML = "°C";
        inputElem.setAttribute("placeholder", "°F");
    } else {
        changeFlag = true;
        $.title = "°C to °F";
        cSpan.innerHTML = "°C";
        fSpan.innerHTML = "°F";
        inputElem.setAttribute("placeholder", "°C");
    }
}
function reset() {
    inputElem.value = "";
    resultElem.innerHTML = "";
}
function convert() {
    if (inputElem.value === "") {
        resultElem.innerHTML = "Input is empty";
        resultElem.style.color = "#D32F2F";
    } else if (isNaN(inputElem.value)) {
        resultElem.innerHTML = "Insert correct value";
        resultElem.style.color = "#D32F2F";
    } else {
        if (changeFlag) {
            //(°C × 9/5) + 32 = °F
            result = ((inputElem.value * 9) / 5 + 32).toFixed(2);
            resultElem.style.color = "rgb(255, 255, 102)";
            resultElem.innerHTML = inputElem.value + "°C: " + result + " °F";
        } else {
            //(°F − 32) × 5/9 = °C
            result = (((inputElem.value - 32) * 5) / 9).toFixed(2);
            resultElem.style.color = "rgb(255, 255, 102)";

            resultElem.innerHTML = inputElem.value + "°F: " + result + " °C";
        }
    }
}

changeBtn.addEventListener("click", change);
resetBtn.addEventListener("click", reset);
convertBtn.addEventListener("click", convert);
