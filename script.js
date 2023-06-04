// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(function(input) {
            if (!input.value) {
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all the required fields.');
        }
    });
});

document.querySelector('.btn').addEventListener('click', function(event) {
    var inputs = document.querySelectorAll('input[required]');
    var isFormValid = true;

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            isFormValid = false;
            break;
        }
    }

    if (!isFormValid) {
        event.preventDefault();
        alert('Aizpildiet visus nepieciešamos laukus!');
    } else {
        window.location.href = 'index.html'
        alert('Reģistrācija veiksmīga')
    }
});