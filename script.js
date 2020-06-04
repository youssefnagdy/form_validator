const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//ShowError Function
function ShowError(input,message) {
    const formcontrol = input.parentElement;
    formcontrol.className= 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}
//ShowSuccess Function
function ShowSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

//check email is valid
function IsValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',function (e) {
    e.preventDefault();
    if(username.value === "")
    {
        ShowError(username,"Username Is Required");
    }else{
        ShowSuccess(username);
    }

    if(email.value === "") {
        ShowError(email, "Email Is Required");
    }else if(!IsValidEmail(email.value)){
        ShowError(email,"Email is not Valid")
    }else{
        ShowSuccess(email);
    }

    if(password.value === "")
    {
        ShowError(password,"Password Is Required");
    }else{
        ShowSuccess(password);
    }

    if(password2.value === "")
    {
        ShowError(password2,"Password Confirm Is Required");
    }else{
        ShowSuccess(password2);
    }
});

