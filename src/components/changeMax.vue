<script setup>
  import { ref } from 'vue';
  import { healthStore } from '../stores/healthStore';
  const health = healthStore();
  const newHealth = ref(health.maxHealth);
</script>

<template>
  <div class="container">
    <input type="number" v-model="newHealth" :disabled="!health.canEditMaxHealth">
    <button @click="health.changeMaxHealth(newHealth)" :disabled="!health.canEditMaxHealth">Change max</button>  
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

input{
  flex: 1;
  padding: 0.8rem;
  border: 2px solid;
  border-radius: 10px;
  font-size: 1rem;  
  text-align: center;
  background: #333;
  color: white;
  border: 2px solid #f4f4f4;    
}

input:disabled {
  border-color: #666;
  opacity: 0.5;
  cursor: not-allowed;
  background: #2a2a2a;
  color: #888;
}

input:focus{
   outline: none;
}

button{
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;  
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease;
  background: #333;
  color: white;
  border: 2px solid #f4f4f4;    
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #3a3a3a;
  border-color: #555;
}
</style>
