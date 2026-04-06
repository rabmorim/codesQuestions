function CodelandUsernameValidation(str) { 

  const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;

  if(regex.test(str)){
    return true;
  } else {
    return false;
  }

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));