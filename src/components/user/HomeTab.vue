<template>
  <main>
    <div class="content-container">

      <img src="@/assets/techfix.png" alt="TechFix Logo" class="logo" />
      <h1>Welcome to <br> TechFix</h1>
      <p class="p1">Your repair starts here!</p>

    </div>
  </main>
</template>

<script>
export default {
  name: 'YourComponent'
}
</script>

<style scoped>

.content-container {
  text-align: left; /* Align text to the left */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start of the container */
  padding: 20px; /* Add some padding */

  margin-bottom: 10vh;
  margin-right: 130vh;
}

.logo {
  width: 250px; /* Adjust the size of the logo */
  height: 250px; /* Maintain aspect ratio */
  margin-bottom: 10px; /* Space between logo and heading */
}

h1 {
  text-align: justify;
  font-size: 3em; /* Adjust font size */
  font-weight: bold; /* Make font bold */
  margin: 0; /* Remove default margins */
  color: #fff; /* White color for text */
}

.p1 {
  position: relative;
  font-size: 1.5em;
  text-align: justify;
}

/* Responsive styling (optional) */
@media (max-width: 600px) {
  .p1 {
    font-size: 1.2em;
    text-align: justify;
  }
}
</style>
