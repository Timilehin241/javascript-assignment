const prompt= require('prompt-sync')();
let number= Number(prompt('enter number'));
let sum=0;
let count=1;
let counter=0;

while(counter!=-1){
console.log("enter number to calculate average ");

 sum+=number;

 let average= sum/count;
 
 console.log(average);
   count++;
 counter=prompt("enter -1 to quit");
 }
 
