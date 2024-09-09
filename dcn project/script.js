document.querySelectorAll('.responsive-button').forEach(button => {
    button.addEventListener('touchstart', () => {
        button.style.backgroundColor = '#3e8e41';
    });

    button.addEventListener('touchend', () => {
        button.style.backgroundColor = '#4CAF50';
    });
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Class booked successfully!');
});
