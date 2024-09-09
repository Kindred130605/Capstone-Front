<template>
  <div>
    <Header /> <!-- Ensure this component is used in the template -->
    <!-- Other content -->

  </div>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/about" class="button">About</router-link>
        <router-link to="/contact" class="button">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '@/components/user/UserHeader.vue'; // Ensure the path is correct

export default {
  components: {
    Header,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button-container {
    margin-right: 60px;
    display: flex;
    gap: 10px; /* Space between buttons */
  }

  .button {
    color: white;
    border: none;
    padding: 8px 16px; /* Adjust padding for button size */
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5); /* Background color for buttons */
    transition: background-color 0.3s ease;

  }

  .button:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Darker background on hover */
  }
</style>
