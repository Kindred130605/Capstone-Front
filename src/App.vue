<template>
  <div id="app">
    <Header /> <!-- Using the Header component -->
    <main class="background-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Header from './components/user/UserHeader.vue';
  
  export default {
    name: 'App',
    components: {
      Header,
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background-container {
  position: fixed;
  background: url('@/assets/BG(1).PNG') no-repeat center center;
  background-size: cover;
  height: 100vh; /* Full viewport height */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; /* Text color to contrast with the background */
}
</style>
