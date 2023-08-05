// print odd numbers in an Array

var arr = [12,13,14,15,16,17,18];
var result = [];
function odd(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(odd(arr));


// convert all the strings to the tittle caps in string array


       function toTitleCase(str) {
     return str.toLowerCase().split(' ').map(function (word) {
       return (word.charAt(0).toUpperCase() + word.slice(1));
         }).join(' ');
   }
   console.log(toTitleCase("string"));


// sum of all prime numbers in array


let arr = [10, 20, 60, 70, 90];
let sum = arr.reduce(function(a, b){
    return a + b;
}, 0);
console.log(sum);


// return all the prime numbers in an array


const arr = [1,2,3,4,5,6,7,8]
let Sum = 0;
for (let i=0;i<arr.length;i++){
  sum = sum+arr[i];
}
console.log(sum)