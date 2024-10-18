// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const currentDate = new Date().toLocaleDateString();
  document.getElementById('currentDate').textContent = currentDate;
});


// Select all sidebar links
const links = document.querySelectorAll('.sidebar-link');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    // Hide all content divs
    document.querySelectorAll('.content-div').forEach(div => {
      div.classList.remove('active');
    });

    // Get the target div ID from the clicked link
    const target = this.getAttribute('data-target');
    
    // Show the corresponding content div
    document.getElementById(target).classList.add('active');
  });
});

// Function to toggle the profile menu visibility
function toggleMenu() {
  const profileMenu = document.getElementById('profile-menu');
  if (profileMenu.style.display === 'block') {
      profileMenu.style.display = 'none';
  } else {
      profileMenu.style.display = 'block';
  }
}

document.getElementById('signupForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission
  confirm= document.getElementById('confirm').value
 
  // Get form data
  const formData = {
    first_name: document.getElementById('fname').value,
    last_name: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    username: document.getElementById('email').value,
    phone_number: document.getElementById('phone_number').value,
    county: document.getElementById('county').value,
    dob: document.getElementById('dob').value,
    gender: document.getElementById('gender').value,
    password: document.getElementById('password').value,   
  };

  // Password confirmation check
  if (formData.password !== confirm) {
    alert('Passwords do not match!');
    return;
  }

  try {
    // Send data to the server
    const response = await fetch('http://127.0.0.1:8000/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      alert('Signup successful!');
    } else {
      const error = await response.json();
      alert(`Error: ${error.message}`);
    }
  } catch (err) {
    console.error('Request failed', err);
    alert('An error occurred. Please try again later.');
  }
});
