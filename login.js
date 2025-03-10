function validate() {
    if (document.querySelector("#num").value == "") {
        alert("Please enter your Mobile Number");
        document.querySelector("#num").focus();
        return false;
    }
    if (document.querySelector("#num").value.length != 10) {
        alert("Please provide a valid phone number (10 digits)");
        document.querySelector("#num").value.focus();
        return false;
    }
    alert("OTP sent");
    document.querySelector('input[type="number"]').value= "";
    return true;
}
