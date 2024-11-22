
    function validateForm() {
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (!name || !email || !phone || !message) {
    alert("Please fill out all the fields before submitting.");
    return false; // Prevent further action
}
    return true; // Allow form submission
}

    function sendMail() {
    // Validate form before sending the mail
    if (!validateForm()) {
    return; // Stop if validation fails
}

    let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
}

    emailjs.send("service_1qgnipa", "template_qxj69jk", parms).then(() => {
    alert("Email Sent!");
}).catch((error) => {
    alert("Error sending email. Please try again.");
    console.error(error);
});
}



