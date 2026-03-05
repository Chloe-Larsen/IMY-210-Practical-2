<!--Chloe Larsen u25004141-->
<script setup>     
  import { healthStore } from '../stores/healthStore';
  const health = healthStore();  
</script>

<template>
    <div class="container">
      <button class="heal" @click="health.heal" :disabled="health.isAtMax">+</button>
      <button class="damage" @click="health.takeDamage" :disabled="health.isDead">-</button>

      <p class="message" v-if="health.isAtMax">
        Health is full
      </p>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    align-items: center;
}

button {
    width: 50px;
    height: 50px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #333;
    color: white;
    border: 2px solid #f4f4f4;    
}

.heal:active:not(:disabled) {
    background-color: green;
    color: white;
}

.damage:active:not(:disabled) {
    background-color: red;
    color: white;
}

button:disabled {
    background-color: rgb(0, 0, 0);
    cursor: not-allowed;
    opacity: 0.7;
}

.message {
    color: #4caf50;
    font-weight: bold;
    margin-left: 10px;
}
</style>