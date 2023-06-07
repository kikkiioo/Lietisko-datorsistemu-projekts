document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#reg-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(function(input) {
            if (!input.value) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Please fill in all the required fields.');
        } else {
            // Perform registration processing here

            // Redirect to index.html after successful registration
            window.location.href = 'index.html';
        }
    });
});