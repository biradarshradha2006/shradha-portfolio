
$(document).ready(function () {

    // CONTACT FORM VALIDATION
    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        // Get form values
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        // Email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check empty fields
        if (name === "" || email === "" ||
            subject === "" || message === "") {

            showError("Please fill in all fields.");
            return;
        }

        // Name validation: First name and surname
        // Both names must start with capital letters
        let namePattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

        if (!namePattern.test(name)) {
            showError(
                "Enter your first name and surname correctly. Example: Shradha Biradar"
            );
            return;
        }

        // Email validation
        // Must have a valid format and start with lowercase
        if (!emailPattern.test(email) || /^[A-Z]/.test(email)) {
            showError(
                "Enter a valid email starting with a lowercase letter."
            );
            return;
        }

        // Success message
        $("#formMessage")
            .css("color", "#86efac")
            .text("Thank you, " + name +
                "! Your form passed validation.")
            .hide()
            .fadeIn(600);

        // Reset form
        this.reset();

    });

    // Display error message
    function showError(message) {
        $("#formMessage")
            .stop(true, true)
            .css("color", "#fca5a5")
            .text(message)
            .hide()
            .fadeIn(400);
    }

    // Contact section animation
    $(".contact-info, .contact-form")
        .css("opacity", "0")
        .animate({ opacity: 1 }, 1000);

});
