//UC1 
function validateEmail_UC1(email){
    const pattern =  /^[a-zA-Z0-9]+@[a-zA-Z]+$/;
    return pattern.test(email);
}
console.log(validateEmail_UC1("abc@bridgelabz.co"));
console.log(validateEmail_UC1("abc@bridgelabz"));