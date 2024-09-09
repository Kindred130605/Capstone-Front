<template>
  <div>
  <header>

    <!-- <h1>TechFix</h1> 

    <div class="button-container">
          <button @click="handleClick('Button 1')" class="button">Home</button>
          <button @click="handleClick('Button 2')" class="button">Our Services</button>
          <button @click="handleClick('Button 3')" class="button">Contact Us</button>
      </div>  -->

  </header>
  </div>
</template>

<script>



</script>


<style>
  /* Reset any default margin/padding */
  body, html {
    margin: 0;
    padding: 0;
  }

  header {
    background-color: rgb(16, 17, 104);
    color: white;
    width: 100%; /* Ensure header spans the full width */
    position: fixed; /* Fix position at the top */
    top: 0; /* Align to the top */
    left: 0; /* Align to the left */
    z-index: 1000; /* Ensure it is on top of other content */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: add a shadow for better visibility */
    display: flex;
    justify-content: space-between; /* Space out h1 and button container */
    align-items: center; /* Vertically center content */
  }

  h1 {
    margin: 0; /* Remove margin to avoid overflow */
  }

  /* .button-container { 
    margin-right: 60px;
    display: flex;
    gap: 10px; /* Space between buttons */
  

  /* .button { 
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
  */

  /* .button:hover { 
    background-color: rgba(0, 0, 0, 0.7);
  */

  
  body {
    padding-top: 50px;
  }
</style>

