
$(document).ready(function () {

    const form = $("#contactForm");

    // Name: letters and spaces only.
    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;

    // Accept commonly used valid email extensions.
    const emailPattern =
        /^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.(com|in|org|net|edu|gov|co|uk|us|io|ai|info|biz|me|dev|app|tech|ac)$/i;

    form.on("submit", function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        // Check empty fields.
        if (!name || !email || !subject || !message) {
            showMessage("Please fill in all fields.", false);
            return;
        }

        // Validate name.
        if (!namePattern.test(name) || name.length < 2 || name.length > 80) {
            showMessage(
                "Invalid name. Please use letters and spaces only. Numbers and special characters are not allowed.",
                false
            );

            $("#name").focus();
            return;
        }

        // Validate email.
        if (
            !emailPattern.test(email) ||
            email.includes("..") ||
            email.length > 254
        ) {
            showMessage(
                "Please enter a valid email address, such as example@gmail.com. Check your email extension.",
                false
            );

            $("#email").focus();
            return;
        }

        // Validate subject.
        if (subject.length < 2 || subject.length > 100) {
            showMessage(
                "Please enter a subject between 2 and 100 characters.",
                false
            );

            $("#subject").focus();
            return;
        }

        // Validate message.
        if (message.length < 10) {
            showMessage(
                "Your message must contain at least 10 characters.",
                false
            );

            $("#message").focus();
            return;
        }

        if (message.length > 2000) {
            showMessage(
                "Your message cannot exceed 2000 characters.",
                false
            );

            $("#message").focus();
            return;
        }

        // Successful validation.
        showMessage(
            "Thank you, " + name +
            "! Your details have been validated successfully. This demonstration form does not send emails.",
            true
        );

        form[0].reset();
    });


    // Display success and error messages.
    function showMessage(message, success) {

        $("#formMessage")
            .stop(true, true)
            .css({
                "color": success ? "#86efac" : "#fca5a5",
                "font-weight": "500",
                "line-height": "1.7"
            })
            .text(message)
            .hide()
            .fadeIn(400);
    }


    // Clear the message when the user starts again.
    form.on("input", "input, textarea", function () {

        $("#formMessage").stop(true, true).fadeOut(200);

    });

});
