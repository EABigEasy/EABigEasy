let aced =[0];
aced.push(40,50,60,90,10,20);
console.log("The array is : ",aced);
let bced = aced.toSorted();
console.log(bced);
let cced =bced.with(3,"44545");

console.log(cced);

//O.O.P METHOD
let dog={};

dog.speak =function(line){
    console.log(`The dog says ${line}`);

};
dog.speak("What it do");