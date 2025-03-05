function validateEmail_UC4(email) {
    const pattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

console.log(validateEmail_UC4("abc.xyz@bridgelabz.co"));  
console.log(validateEmail_UC4("abc$xyz@bridgelabz.co"));  
