const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Check Required Fields
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
//Check Length
function CheckLength(input,min,max)
{
    if(input.value.length < min )
    {
        ShowError(input,`${getFieldName(input)} Must be at Least ${min} Characters`)
    }else if (input.value.length > max){
        ShowError(input,`${getFieldName(input)} Must be less than  ${max} Characters`)
    }else{
        ShowSuccess(input)
    }
}
//Check password match
function CheckPasswordMatch(input1,input2) {
    if(input1.value !== input2.value)
    {
        ShowError(input2,"Password do not match ")
    }
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
function CheckEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()))
    {
        ShowSuccess(input)
    }else{
        ShowError(input,"Email is not Valid");
    }
}
form.addEventListener('submit',function (e) {
    e.preventDefault();
    CheckRequired([username,email,password,password2]);
    CheckLength(username,3,15);
    CheckLength(password,6,25);
    CheckEmail(email);
    CheckPasswordMatch(password,password2);
});
