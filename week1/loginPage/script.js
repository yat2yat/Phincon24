document.addEventListener("DOMContentLoaded", function() {
    let eyeicon = document.getElementById("eyeicon");
    let password = document.getElementById("password");

    eyeicon.onclick = function showHidePassword() {
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
    }
});
