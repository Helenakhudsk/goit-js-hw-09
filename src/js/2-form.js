const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[type="email"]');
const textarea = document.querySelector('textarea');

let formDate = {
    email: "",
    message: "",
};

form.addEventListener('input', (event) => {
event.preventDefault();
formDate.email = input.value.trim();
formDate.message = textarea.value.trim();
localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
});

form.addEventListener('submit', (event) => {
event.preventDefault();
if(formDate.email === "" || formDate.message === ""){
    alert('Fill please all fields')
}
else{
    console.log(formDate);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formDate = {email: "", message: "",}
}
});

const isSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (isSavedData){
    input.value = isSavedData.email;
    textarea.value = isSavedData.message;
    formDate.email = isSavedData.email.trim();
    formDate.message = isSavedData.message.trim();
};