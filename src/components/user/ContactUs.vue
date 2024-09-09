<template>
    <div class="background-container">
      <div class="container">
        
        <div class="contact-info">
          <h1>Contact Us</h1>
          <br/>
          <br>
          <div class="contact-detail">
            <i class="fas fa-envelope"></i>
            <h4>Email: intelvision@yahoo.com</h4>
          </div>
          <br>
          <div class="contact-detail">
            <i class="fas fa-phone"></i>
            <h4>Contact No.: 123-456-7890</h4>
          </div>
          <br>
          <div class="contact-detail">
            <i class="fas fa-map-marker-alt"></i>
            <h4>Address: 1234 Elm Street, City, Country</h4>
          </div>
        </div>
  
        <div class="contact-form-container">
          <form class="contact-form">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
  
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
  
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
  
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
  };
  </script>
  
  <style scoped>
  .background-container {
    position: fixed;
    background: url('@/assets/BG(3).PNG') no-repeat center center;
    background-size: cover;
    height: 100vh; /* Full viewport height */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff; /* Text color to contrast with the background */
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #f4f4f4; /* Light background for the contact section */
    border-radius: 8px;
    max-width: 1200px; /* Set a max width for the container */
    margin: 0 auto; /* Center the container horizontally */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for better visibility */
  }
  
  .contact-info {
    flex: 2;
    padding: 20px;
    background: #ffffff; /* White background for contact info */
    border-radius: 8px;
    margin-right: 50px; /* Space between contact info and form */
  }
  
  .contact-info h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333; /* Darker color for better visibility */
  }
  
  /* Uniform alignment for contact detail icons and text */
  .contact-detail {
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Added margin for space between contact details */
  }
  
  .contact-detail i {
    margin-right: 15px;
    font-size: 1.5em;
    color: #007bff; /* Optional: Add color to icons */
  }
  
  .contact-detail h4 {
    font-size: 1.2em;
    margin: 0;
    color: #333; /* Darker color for better visibility */
  }
  
  .contact-form-container {
    flex: 2.5; /* Increased to make the form section slightly wider */
    padding: 20px;
    background: #ffffff; /* White background for the form */
    border-radius: 8px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .contact-form label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .contact-form textarea {
    resize: vertical; /* Allow vertical resizing of the textarea */
  }
  
  .contact-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
  }
  
  .contact-form button:hover {
    background-color: #0056b3;
  }
  </style>
  