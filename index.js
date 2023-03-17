const form = document.querySelector('.contact__form');

const submitButton = form.querySelector('.contact__btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  submitButton.disabled = true;

  submitButton.style.backgroundColor = '#ccc';

  fetch('/submit-form', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    alert('Form submitted successfully!');
  })
  .catch(error => {
    alert('An error occurred while submitting the form.');
  });
});

