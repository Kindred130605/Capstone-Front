<template>
  <div>
  <header>

     <h1>TechFix</h1> 

    <div class="button-container">
          <button @click="handleClick('Button 1')" class="button">Home</button>
          <button @click="handleClick('Button 2')" class="button">Our Services</button>
          <button @click="handleClick('Button 3')" class="button">Contact Us</button>
      </div> 

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
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
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

