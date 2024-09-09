<template>
    <main>
        <div class="content-container">
            <h1>We Offer</h1>
        </div>

        <div class="grid-container">
            <div class="grid-item-1">Hardware <br>Cleaning</div>
            <div class="grid-item-2">Virus/Malware <br>Removal</div>
            <div class="grid-item-3">Software or Hardware <br>Removal</div>
            <div class="grid-item-4">Networking</div>
            <div class="grid-item-5">Reformat & <br> Reprogram</div>
            <div class="grid-item-6">Check Up for <br> Computer</div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'YourComponent'
}
</script>

<style scoped>

/* General styling */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 4.5em; /* Adjust font size */
  font-weight: bold; /* Make font bold */
  margin: 0 0 20px 0; /* Remove top margin and add bottom margin */
  color: #fff; /* White color for text */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns of equal width */
  grid-template-rows: repeat(2, 1fr); /* 2 rows of equal height */
  gap: 20px; /* Space between grid items */
  width: 200vh;
  height: 60vh;
  max-width: 1200px; /* Optional: Set a max width for the grid container */
  margin-bottom: 8vh;
}

.grid-item-1, .grid-item-2, .grid-item-3, .grid-item-4, .grid-item-5, .grid-item-6 {
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 0px;
  text-align: center;
  font-size: 2.5em;
  font-weight: bolder;
  color: #ffffff; /* Text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Adds a shadow to text */
  overflow: hidden; /* Ensure content does not overflow the border radius */
}

/* Specific background images for grid items */
.grid-item-1 {
  background-image: url('@/assets/Hardware Cleaning BG.PNG');
}
.grid-item-2 {
  background-image: url('@/assets/Virus & Malware Removal.PNG');
}
.grid-item-3 {
  background-image: url('@/assets/Hardware and Software Removal.PNG');
}
.grid-item-4 {
  background-image: url('@/assets/Networking.PNG');
}
.grid-item-5 {
  background-image: url('@/assets/Reprogram and Reformat.PNG');
}
.grid-item-6 {
  background-image: url('@/assets/Computer Check Up.jpg');
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
    grid-template-rows: repeat(6, auto); /* Adjust rows to fit content */
  }
}
</style>
