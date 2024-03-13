const form = document.getElementById('form'); // Get the login form element

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation check (replace with your actual validation logic)
  if (username === '' || password === '') {
    alert('Please fill in both username and password fields.');
    return;
  }

  // Simulate an asynchronous login process (replace with your actual logic)
  console.log('Submitting login form...');
  setTimeout(() => {
    alert('Login successful!');
    // Perform actions after successful login (e.g., redirect to another page)
  }, 1000); // Simulate a 1-second delay
});