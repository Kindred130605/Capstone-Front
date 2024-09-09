<template>
  <div>
    <header>
      <h2>TechFix</h2> 

      <div class="button-container">
        <router-link class="button" active-class="active" to="/home">
          <i class='bx bxs-home'></i>
          <span class="text">Home</span>
        </router-link>
        <router-link class="button" active-class="active" to="/services">
          <span class="text">Our Services</span>
        </router-link>
        <router-link class="button" active-class="active" to="/contact">
          <span class="text">Contact Us</span>
        </router-link>
      </div> 
    </header>
  </div>
</template>

<script>
// No changes needed here for routing
</script>

<style>
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

    padding: 20px;
    margin-top: 100px;
    border-radius: 10px;

    font-size: 1.2em;
    margin-top: -2vh;
    margin-right: 120vh;
  }

  h2 {
    margin: 2vh;
  }

  .button-container { 
    margin-right: 60px;
    display: flex;
    gap: 10px; /* Space between buttons */
  }

  .button { 
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5); /* Background color for buttons */
    transition: background-color 0.3s ease;
    text-decoration: none; /* Remove underline for router-link */
    display: flex;

    transition: background-color 0.3s ease;
    margin-top: 15px;
}

  .button:hover { 
    background-color: rgba(0, 0, 0, 0.7);
  }

  body {
    padding-top: 50px;
  }
</style>
