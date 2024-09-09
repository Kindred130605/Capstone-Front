<template>
    <div class="signup-container">
      <h1>Create an Account</h1>
      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Enter your username"
          />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            minlength="6"
            placeholder="Enter your password"
          />
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            minlength="6"
            placeholder="Confirm your password"
          />
        </div>
  
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      handleSignup() {
        // Basic form validation
        if (this.password !== this.confirmPassword) {
          this.errorMessage = "Passwords don't match!";
          return;
        }
        // Additional logic to handle signup (e.g., API request)
        this.errorMessage = ''; // Reset error message
        console.log('Form submitted:', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        // Redirect or show success message after successful signup
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .signup-form {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .error-message {
    color: red;
    margin-bottom: 10px;
  }
  
  .signup-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 10px;
  }
  
  .signup-button:hover {
    background-color: #0056b3;
  }
  </style>
  