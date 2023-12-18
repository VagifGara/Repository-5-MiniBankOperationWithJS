let m=2000;
let n=Number(prompt("Mebleg"));
let operator=prompt("operator");
function inCome (m,n){
    return m+n;
}
function expense (m,n){
    return m-n;
}

function operating(m,n,operator)
{
 switch(operator){
    case "+":
        alert("Income :"+inCome(m,n));
        break;
    case "-":
        if(m>n){
            console.log("Expense" +expense(m,n));
        }
        else if(m<n){
            console.log("kifayet qeder mebleg yoxdur");

        }
        
        break;
    default:
        console.log("Operation is incorrect");
        break;
   }
}

operating (m,n, operator);