<!--Chloe Larsen u25004141-->
<script setup>  
  import { healthStore } from '../stores/healthStore';
  const health = healthStore();
</script>

<template>
  <button @click="health.reset">Reset</button>

</template>

<style scoped>
button{
  width: 75px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #333;
  color: white;
  border: 2px solid #f4f4f4;    
}

button:active{
  background: grey;
}
</style>
