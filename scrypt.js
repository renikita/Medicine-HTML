const subscribeButton = document.querySelector('footer .btn-primary');
const emailInput = document.querySelector('footer input[type="text"]');
subscribeButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
});


const animatedElements = document.querySelectorAll('.rating-div, .photocard-div, .card-StepCheck div');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(element => observer.observe(element));


document.querySelectorAll('.PhotoDoctors').forEach(photo => {
    photo.addEventListener('click', () => {
        if (photo.classList.contains('enlarged')) {
            photo.classList.remove('enlarged');
        } else {
            photo.classList.add('enlarged');
        }
    });
});