const pwd = document.getElementById("password");
const cfpwd = document.getElementById("cf_password");
const matchText = document.getElementById("password-match");


function passwordMatcher() {
    console.log("function running!")
    if (pwd.value != cfpwd.value) {
        matchText.textContent = "* Passwords do not match.";
    } else {
        matchText.textContent = " ";
    }
}


pwd.addEventListener("input", passwordMatcher);
cfpwd.addEventListener("input", passwordMatcher);
