document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const generatedId = generateRandomID();
  const idDisplay = document.getElementById('generatedId');
  idDisplay.textContent = `Your Login ID: ${generatedId}`;
  idDisplay.style.display = 'block';

  // Hide Create Account button
  document.getElementById('createAccountBtn').style.display = 'none';

  // Show Go to Login button
  document.getElementById('goToLogin').style.display = 'block';
});
