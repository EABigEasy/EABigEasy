/*base case 

//factorial

let n = prompt("Enter a number as n? :" );
const factorial=(n)=>{
    if (n===1 || n===0){ //base case
        return 1;
    }
    else
return n * factorial(n-1); //recursive call
}
factorial(n); */


function first(){
    console.log("First");

}
function second(){
    console.log("Second");

}
setTimeout(first, 2000);
second();