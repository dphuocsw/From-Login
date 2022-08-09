var buttonSubmit = document.querySelector(".form-submit button");
console.log(buttonSubmit);
buttonSubmit.onclick = function() {
    alert("Succecful Login");
    location.href = 'https://www.facebook.com/dieulinh.nguyenle.509';
}
let eyeOpenElement = document.querySelector("#eye-open");
let formInputPassword = document.querySelector("#formInputPassword");
let eyeCloseElement = document.querySelector("#eye-close");
eyeOpenElement.onclick = function() {
    formInputPassword.type = 'text';
    eyeCloseElement.style.display = "block";
    eyeOpenElement.style.display = 'none';
}
eyeCloseElement.onclick = function() {
    formInputPassword.type = 'password';
    eyeCloseElement.style.display = "none";
    eyeOpenElement.style.display = 'block';
}