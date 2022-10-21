//mortgage
"use strict";

window.onload = init;
//formula from Quora resource:

function init(){
    const calculateBtn = document.getElementById("calculate");
    calculateBtn.onclick = computeInterest;
}

// M = p * [ r / ( 1  - ( 1 + r ) ^ -n ) ]

function computeInterest(){
    const getPrincipal = Number(document.getElementById("principal").value);
    let getRate = Number(document.getElementById("interestRate").value);
    let getLength = Number(document.getElementById("loanLength").value);
    const returnMonth = document.getElementById("answerMonthly");
    const returnInterest = document.getElementById("answerInterest");
    const returnTotal = document.getElementById("answerAll");

    //compute monthly
    getRate = ( getRate / 100 ) / 12;               //convert to monthly
    getLength *= 12;                                //convert to months
    let first = 1 - Math.pow( (1 + getRate) , -getLength );
    let monthly = getPrincipal * ( getRate / first );
    returnMonth.value = `$${monthly.toFixed(2)}`;

    //compute total
    let totalPrice = monthly * getLength;
    returnTotal.value = `$${totalPrice.toFixed(2)}`;
    
    //compute interest
    let interestOnly = totalPrice - getPrincipal;
    returnInterest.value = `$${interestOnly.toFixed(2)}`
}