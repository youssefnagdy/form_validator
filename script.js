const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Check Required Inputs
function CheckRequired(inputArr)
{
    inputArr.forEach(function (input) {
    if(input.value.trim() === "")
    {
        ShowError(input,`${getFieldName(input)} Is Required`);
    }else{
        ShowSuccess(input);
    }
    })
}
//Get Input Name By ID
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
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
    CheckRequired([username,email,password,password2]);
});
