/*
    
*/
function FirstReverse(str) { 

  let arr = str.split('');

  arr.reverse();

  return arr.join('');

}
   
// keep this function call here 
console.log(FirstReverse(readline()));