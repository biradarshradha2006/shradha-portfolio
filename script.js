$(document).ready(function () {

    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {
            showMessage("Please fill in all fields.", false);
            return;
        }

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", false);
            return;
        }

        if (name.length < 2) {
            showMessage("Please enter a valid name.", false);
            return;
        }

        showMessage(
            "Thank you, " + name +
            "! Your details passed validation. This demo form does not send emails.",
            true
        );

        this.reset();
    });

    function showMessage(message, success) {
        $("#formMessage")
            .stop(true, true)
            .css("color", success ? "#86efac" : "#fca5a5")
            .text(message)
            .hide()
            .fadeIn(400);
    }

});
