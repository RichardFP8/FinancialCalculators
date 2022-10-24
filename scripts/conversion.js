//combining C to F && F to C

//interactions occur after window finishes loading
window.onload = init;

//init triggers the function that converts input 
function init() {
    const convert = document.getElementById("convertC");
    convert.onclick = convertC_toF;

    const convertBtn = document.getElementById("convertF");
    convertBtn.onclick = convertF_toC;

    const resetBtn = document.getElementById("resetC");
    resetBtn.onclick = resetCtoF;

    const otherResetBtn = document.getElementById("resetF");
    otherResetBtn.onclick = resetFtoC;
}

function convertF_toC() {
    const getFahren = Number(document.getElementById("fahren").value);
    const answer = document.getElementById("toCelsius");
    const message = document.getElementById("message2");
    //test if input is a number or NaN; if Nan, display message and exit
    if (isNaN(getFahren)) {
        answer.value = "You good?";
        message.innerHTML = "Not a number";
        return;
    }
    else {
        let toCelsius = (5 / 9) * (getFahren - 32);
        answer.value = toCelsius.toFixed(2);
        message.innerHTML = "";
    }
}

function convertC_toF() {
    const getCelsius = Number(document.getElementById("celsius").value);
    const answer = document.getElementById("toFahrenheit");
    const message = document.getElementById("message");
    //test if input is a number or NaN; if Nan, display message and exit
    if (isNaN(getCelsius)) {
        answer.value = "You good?";
        message.innerHTML = "Not a number";
        return;
    }
    else {
        let toFahrenheit = (5 / 9) * (getCelsius - 32);
        answer.value = toFahrenheit.toFixed(2);
        message.innerHTML = "";
    }
}

function resetFtoC() {
    const resetFahren = document.getElementById("fahren");
    const resetAnswer = document.getElementById("toCelsius");
    resetFahren.value = "";
    resetAnswer.value = "";
}

function resetCtoF() {
    const resetCelsius = document.getElementById("celsius");
    const resetAnswer = document.getElementById("toFahrenheit");
    resetCelsius.value = "";
    resetAnswer.value = "";
}