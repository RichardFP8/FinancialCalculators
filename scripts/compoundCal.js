//compound formula
"use strict";

//all event handlers respond after the first event
window.onload = init;

//find the button, assign an event handler to it and react
function init(){
    const computeBtn = document.getElementById("compute");
    computeBtn.onclick = computeCD;
}

//find, access, store the inputs -> compute adnd return; include if condition for NaN
function computeCD(){
    //get the 3 inputs
    const getDeposit = Number( document.getElementById("deposit").value);
    const getInterest = Number( document.getElementById("interest").value);
    const getTime = Number( document.getElementById("years").value);
    const returnValue = document.getElementById("futureValue");
    //include if condition
    if(isNaN(getDeposit) || isNaN(getInterest) || isNaN(getTime)){
        const message = document.getElementById("message");
        message.innerHTML = "Only numbers";
        return;
    }
    /*compute the future value: 
    // a =  p*( (1 + (r / n))^(t * n) ) 
    where n represents the times its compounded, which here we assume daily  */
    let firstStep = Math.pow( 1 + ( getRate / 365 ), (getTime * 365)) ;
    let finalStep = getDeposit * firstStep;
    returnValue.value = `$${finalStep}`;
    //compute the interest

    //return values

}