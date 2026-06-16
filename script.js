const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("messageError").innerText="";
    document.getElementById("success").innerText="";

    let valid = true;

    if(name===""){
        document.getElementById("nameError").innerText =
        "Name is required";
        valid=false;
    }

    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        document.getElementById("emailError").innerText =
        "Enter valid email";
        valid=false;
    }

    if(message===""){
        document.getElementById("messageError").innerText =
        "Message is required";
        valid=false;
    }

    if(valid){
        document.getElementById("success").innerText =
        "Form submitted successfully!";
    }

});