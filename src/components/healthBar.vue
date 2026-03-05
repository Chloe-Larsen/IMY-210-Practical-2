<!--Chloe Larsen u25004141-->
<script setup>
import { computed } from 'vue';
import { healthStore } from '../stores/healthStore';
const health = healthStore();

const barColor = computed(() => {
    const percentage = health.healthPercentage;
    if (percentage <= 25) return '#ff4444'; // Red for low health
    if (percentage <= 60) return '#ffaa44'; // Orange for medium health
    return '#4caf50'; // Green for high health
});
</script>

<template>
    <div class="health-container">
        <div 
            class="health-bar" 
            :style="{ width: health.healthPercentage + '%', backgroundColor: barColor}"
        ></div>
  </div>
</template>

<style scoped>
.health-container {
    width: 545px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #333;     
}

.health-bar {
    height: 100%;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
    
}
</style>