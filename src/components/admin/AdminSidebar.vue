<template>
    <aside>
      <div class="logo">
        <img class="app-logo" src="/src/assets/techfix.png" alt="App Logo" />
      </div>
      <div class="menu-toggle-wrap">
        <!-- Add toggle button if necessary -->
      </div>
      <div class="menu">
        <router-link class="button" active-class="active" to="/admin-dashboard">
          <i class="bx bxs-home"></i>
          <span class="text">Dashboard</span>
        </router-link>
        <router-link class="button" active-class="active" to="/admin-bookinglist">
          <i class="bx bxs-book-add"></i>
          <span class="text">Appointments</span>
        </router-link>
        <router-link class="button" active-class="active" to="/admin-history">
          <i class="bx bx-history"></i>
          <span class="text">History</span>
        </router-link>
      </div>
    </aside>
  </template>
  
  <script setup>
 
    import Sidebar from './components/admin/AdminSidebar.vue';


  </script>
  
  <style scoped>
  aside {
    min-width: 250px;
    background-color: var(--main);
    height: 100vh;
    display: block;
    position: fixed;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
    z-index: 999;
    color: var(--light);
  }
  
  .logo {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  .app-logo {
    width: 200px;
    height: 200px;
  }
  
  .menu {
    display: inline-grid;
    width: 100%;
    margin-top: 20px;
  }
  
  i {
    font-size: 20px;
  }
  
  .text {
    font-size: 16px;
    position: absolute;
    margin-left: 5px;
  }
  
  .button {
    color: var(--light);
    text-decoration: none;
    padding: 15px 20px;
    transition: all 0.3s ease-in-out;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  
  .button:hover {
    background-color: var(--light);
    color: black;
  }
  
  .button.active {
    background-color: var(--light);
    color: black;
  }
  </style>
  