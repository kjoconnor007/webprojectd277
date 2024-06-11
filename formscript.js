document.addEventListener("DOMContentLoaded", function() {
    var Enablenotifications = document.getElementById("enablenotifications");
    var emailvalue = document.getElementById("email");
    var vEmail= document.getElementById("VEmail");
    var termsCheckbox = document.getElementById("terms");

    function validateForm() {
        var email = emailvalue.value;
        var verifyEmail = vEmail.value;
        var termsChecked = termsCheckbox.checked;

        if (email === verifyEmail && termsChecked) {
            Enablenotifications.disabled = false;
        } else {
            Enablenotifications.disabled = true;
        }
    }

    // Add event listeners to validate form on input change
    emailvalue.addEventListener("input", validateForm);
    vEmail.addEventListener("input", validateForm);
    termsCheckbox.addEventListener("change", validateForm);

    // Initial check to disable the button on page load if conditions are not met
    validateForm();
});
