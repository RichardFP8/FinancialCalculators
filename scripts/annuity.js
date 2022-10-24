//for annuity
"use strict";

//first event handler allows the rest to hold off until after the window loads
window.onload = init;

//access the button and have an event handler for when its click; compute
function init() {
    const computeBtn = document.getElementById("compute");
    computeBtn.onclick = calculateAnnuity;
    const resetBtn = document.getElementById("reset");
    resetBtn.onclick = resetAll;
}

//calculate the present annuity

function calculateAnnuity() {
    const getMonthly = Number(document.getElementById("monthlyPay").value);
    let getRate = Number(document.getElementById("interestRate").value);
    let getYears = Number(document.getElementById("years").value);
    const message = document.getElementById("errorMessage");
    const answer = document.getElementById("answer");

    if (isNaN(getMonthly) || isNaN(getRate) || isNaN(getYears)) {
        message.innerHTML = "You serious";
        return;
    }
    else { //calculate  p * [ (1 - ( 1 + rate )^-n ) /rate]
        getRate = (getRate / 100) / 12;
        getYears *= 12;
        const firstStep = Math.pow( 1 + getRate, -getYears) - 1;
        const present = getMonthly * ( firstStep / getRate );
        
        answer.value = `$${-present.toFixed(2)}`;
        message.innerHTML = "";
    }
}

function resetAll() {
    const resetMonthly = document.getElementById("monthlyPay");
    const resetRate = document.getElementById("interestRate");
    const resetYears = document.getElementById("years");
    const resetPresent = document.getElementById("answer");
    resetMonthly.value = "";
    resetRate.value = "";
    resetYears.value = "";
    resetPresent.value = "";
}