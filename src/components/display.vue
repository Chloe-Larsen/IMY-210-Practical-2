<!--Chloe Larsen u25004141-->
<script setup>     
  import { healthStore } from '../stores/healthStore';
  const health = healthStore();  
  import healthBar from './healthBar.vue';
</script>

<template>
  <div class="container">
    <h1>Your health </h1>
    <p>Currnet health {{ health.health }}</p>
    <p>Max health {{ health.maxHealth }}</p>  
  <healthBar />
  </div>
</template>

<style scoped>
  h1,p {    
  padding: 0,5rem;
  color: white;
}
</style>