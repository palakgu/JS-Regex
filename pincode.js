function validatePin(pin) {
    const pinPattern = /^(?![A-Za-z])\d{3}\s?\d{3}(?![A-Za-z])$/;
    if (pinPattern.test(pin)) {
        console.log(`Valid PIN: ${pin}`);
        return true;
    } else {
        console.error(`Invalid PIN: ${pin}`);
        return false;
    }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        console.log(`Valid Email: ${email}`);
        return true;
    } else {
        console.error(`Invalid Email: ${email}`);
        return false;
    }
}

console.log("Testing PIN validation:");
validatePin("400088");    
validatePin("400 088");   
validatePin("A400088");   
validatePin("400088B");   

console.log("\nTesting Email validation:");
validateEmail("abc.xyz@bridgelabz.co.in"); 
validateEmail("abc@bridgelabz.co");        
validateEmail("abc@.com.my");              
validateEmail("abc@abc@gmail.com");        
