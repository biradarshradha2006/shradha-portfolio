
$(document).ready(function () {

    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        // Name: only letters, spaces, hyphens and apostrophes
        let namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

        // Email: proper email format with a valid-looking domain
        let emailPattern =
            /^[A-Za-z0-9_%+-]+(?:\.[A-Za-z0-9_%+-]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,24}$/;

        // Check empty fields
        if (!name || !email || !subject || !message) {
            showMessage("Please fill in all fields.", false);
            return;
        }

        // Name validation
        if (name.length < 2 || name.length > 60 || !namePattern.test(name)) {
            showMessage(
                "Invalid name! Please use only letters and spaces. Numbers and special characters are not allowed.",
                false
            );
            $("#name").focus();
            return;
        }

        // Email validation
        if (!emailPattern.test(email)) {
            showMessage(
                "Invalid email! Please enter a proper email address, such as name@gmail.com.",
                false
            );
            $("#email").focus();
            return;
        }

        // Reject .con instead of .com
        if (email.toLowerCase().endsWith(".con")) {
            showMessage(
                "Invalid email domain! Please check whether you meant .com instead of .con.",
                false
            );
            $("#email").focus();
            return;
        }

        // Subject validation
        if (subject.length < 3) {
            showMessage("Subject must contain at least 3 characters.", false);
            $("#subject").focus();
            return;
        }

        // Message validation
        if (message.length < 10) {
            showMessage("Message must contain at least 10 characters.", false);
            $("#message").focus();
            return;
        }

        // Success message
        showMessage(
            "Thank you, " + name +
            "! Your details passed validation. This demo form does not send emails.",
            true
        );

        this.reset();
    });


    // Display validation messages
    function showMessage(message, success) {

        $("#formMessage")
            .stop(true, true)
            .css("color", success ? "#86efac" : "#fca5a5")
            .text(message)
            .hide()
            .fadeIn(400);
    }

});
