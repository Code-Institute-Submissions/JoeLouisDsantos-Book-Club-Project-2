function sendMail(contactForm) {
    emailjs.send("gmail", "joe-louis", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "book_question": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}