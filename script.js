// email validation
function emailValidation() {
    const formEmail = document.getElementById("form-email")
    // console.log(formEmail)
    const emailPrompt = document.getElementById("email-prompt")
    // console.log(emailPrompt)
    const emailInput = document.getElementById("email-input")
    // console.log(emailInput)
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!reg.test(emailInput.value)){
        // adding a element            
        emailPrompt.innerHTML = "Please provide a valid email address"
        formEmail.after(emailPrompt) 
        emailInput.style.border = "1px solid red"
        return false;         
    } else {
        emailPrompt.innerHTML = "it is a valid email address"
        formEmail.after(emailPrompt) 
        emailInput.style.border = "1px solid green"
        
    }
    // return true;
}
// console.log(emailValidation())