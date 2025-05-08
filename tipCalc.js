
let billAmount = 0;
let tipAmount = 0;
let tipSelect = 0;
let total = 0;
let numToCheck;
let first;





function getBillAmount()
{
    first = prompt("Please use prompts to use this, I dont know how to reference from HTML to JS or vice versa. Press enter to continue")
    billAmount = prompt("How much was the bill?: ");
}

getBillAmount();
numToCheck = billAmount;
checkNum();

function checkNum()
{
    if(isNaN(numToCheck) || String(numToCheck).split(".")[1]?.length != 2 || numToCheck <=0)
    {
        numToCheck = prompt("Please enter in format '123.45'. Do not include a currency symbol: ");
        checkNum();
    }

}
function checkPerc()
{
    if(isNaN(tipAmount)  || tipAmount <=0)
    {
        tipAmount = prompt("Please enter in format '12'. Do not include a % sign: ");
        checkPerc();
    }
}

console.log(billAmount);

function getTipAmount()
{
    tipSelect = prompt("Would you like to tip a specific amount (1), or a percentage?(2): ");
}

getTipAmount();
checkTipNum();

function checkTipNum()
{
    
    if(tipSelect==1)
    {
        tipAmount = prompt("Please enter amount to tip: ");
        numToCheck = tipAmount;
        checkNum();
        calcTot();
    }
    else if(tipSelect==2)
    {
        tipAmount = prompt("Please percentage to tip: ");
        checkPerc();
        calcPerc();
    }
    else
    {
        tipSelect = prompt("Please enter 1 (specific amount) or 2(percentage): ");
        checkTipNum();
        console.log(tipSelect)
    }
}

function calcPerc()
{
    console.log ("Tip: " + (billAmount*(tipAmount/100)).toFixed(2));
    tipAmount = 1 + (tipAmount/100);
    total = billAmount * tipAmount;
    tipAmount = Math.ceil(tipAmount *100)/100;
    tipAmount = tipAmount.toFixed(2);
    displayTotal();
    
}
function calcTot()
{
    total = +billAmount + +tipAmount;
    
    console.log ("Tip: " + tipAmount);
    displayTotal();
}


function displayTotal()
{
    total = Math.ceil(total *100)/100;
    total = total.toFixed(2);
    console.log("Total: " + total);

}







