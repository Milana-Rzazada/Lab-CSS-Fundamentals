const form=document.getElementsByName("Myform")[0];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name=document.getElementsByName("name")[0].value;
    const surname=document.getElementsByName("surname")[0].value;
    const email=document.getElementsByName("email")[0].value;
    const password=document.getElementsByName("createpassword")[0].value;
    const confirmPassword = document.getElementsByName("confirmpassword")[0].value;
    const dob = document.getElementsByName("dob")[0].value;
    const gender = document.getElementsByName("browser") ;
    
    
    


    console.log("First name:", name);
    console.log("Last name:", surname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Conform Password:", confirmPassword);
    console.log("Date of Birth:", dob);
    for (let i = 0 ; i < gender.length; i++){
        if(gender[i].checked){
            console.log("Gender:", gender[i].value);
        }
    }
    


    if (password.length < 8) {
  console.log("Error: Please, You have to enter at least 8 characters.");
}

   

    if(password!==confirmPassword){
        console.log("Password and Confirm Password are not same.");
    }
    else{
        console.log("Sucsessful!");
    }

}

);

const reset=document.getElementsByName("reset")[0];

reset.addEventListener("click", function(){
    console.clear()
});