function validateForm(event) {
//About
    let aboutInfo = document.getElementById("abouti");
    if(aboutInfo.value == ""){
        document.getElementById("aboutError").style.display = "block";
    }else{
        document.getElementById("aboutError").style.display = "none";
    }
    //Firt Name
    let fName = document.getElementById("firstName");
    if(fName.value == ""){
        document.getElementById("firstNameError").style.display = "block";
    }else{
        document.getElementById("firstNameError").style.display = "none";
    }
//Last Name
    let lName = document.getElementById("lastName");
     if(lName.value == ""){
        document.getElementById("lastNameError").style.display = "block";
    }else{
        document.getElementById("lastNameError").style.display = "none";
    }
//Email
    let email = document.getElementById("email");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//Email Check
    if(!emailPattern.test(email.value)){
        document.getElementById("emailError").style.display = "block";
        email.focus;
    }else {
        document.getElementById("emailError").style.display = "none";
    }

//Phone
    let tlf = document.getElementById("phone");
    let phonePattern =/^([0-9]{3})+([ \.-]{1})([0-9]{3})+([ \.-]{1})([0-9]{4})$/;
    
//Phone check
   if(!phonePattern.test(tlf.value)){
       document.getElementById("phoneError").style.display = "block";
       tlf.focus;
   }else {
       document.getElementById("phoneError").style.display = "none";
   }   
}

document.getElementById("submitContact").addEventListener("click", function name(params) {
    validateForm();
})