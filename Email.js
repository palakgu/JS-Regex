function validateEmail_UC5(email) {
    const pattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;
    return pattern.test(email);
}

console.log(validateEmail_UC5("abc.xyz@bridgelabz.co.in")); 
console.log(validateEmail_UC5("abc@gmail.com.1a"));        
