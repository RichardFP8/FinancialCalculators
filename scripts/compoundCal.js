//compound formula
"use strict";

//all event handlers respond after the first event
window.onload = init;

//find the button, assign an event handler to it and react
function init(){
    const computeBtn = document.getElementById("compute");
    computeBtn.onclick = computeCD;
}

//find, access, store the inputs -> compute and return; include if condition for NaN
function computeCD(){
    //get the 3 inputs
    const getDeposit = Number( document.getElementById("deposit").value);
    let getInterest = Number( document.getElementById("interest").value);
    const getTime = Number( document.getElementById("years").value);
    const returnValue = document.getElementById("futureValue");
    const returnInterest = document.getElementById("totalInterest"); 
    const message = document.getElementById("message");
    //include if condition
    if(isNaN(getDeposit) || isNaN(getInterest) || isNaN(getTime)){
       
        message.innerHTML = "Only numbers";
        return;
    }
    else{
    /*compute the future value: 
    // a =  p * ( (1 + (r / n))^(t * n) ) 
    where n represents the times its compounded, which here we assume daily  */
    getInterest /= 100; //convert to decimal form
    let convertToAPY = (((Math.pow( 1 + (getInterest / 365) , 365 ) ) - 1) * 100).toFixed(2) ; //conver the interest rate which is APR to APY percentage
    convertToAPY /= 100;
    let firstStep = Math.pow( 1 + ( convertToAPY / 365 ), (getTime * 365)) ;
    let finalStep = getDeposit * firstStep;
    //compute the interest
    let justInterest = finalStep - getDeposit;
    //return value
    returnValue.value = `$${finalStep.toFixed(2)}`;
    returnInterest.value = `$${justInterest.toFixed(2)}`;
    message.innerHTML = "";

}
    
   
}