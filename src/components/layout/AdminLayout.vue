<template>

  <nav>
    <router-link to="/admin/signup">Sign Up</router-link>
    <router-link to="/admin/dashboard">Dashboard</router-link>
    <router-link to="/admin/repairlist">Repair List</router-link>
    <router-link to="/admin/inquiries">Inquiries</router-link>
    <router-link to="/admin/servicelist">Service List</router-link>
    <router-link to="/admin/adminuserlist">Admin User List</router-link>
  </nav>

    <div>
      <aside>

        <!-- Admin Sidebar -->
         
      </aside>

      <main class="background-container">
        <router-view></router-view>
      </main>

    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminLayout'
  }
  </script>
  
  
<style scoped>

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
  