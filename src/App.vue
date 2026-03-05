<!--Chloe Larsen u25004141-->
<script setup>  
  import buttons from './components/buttons.vue';  
  import display from './components/display.vue';
  import changeMax from './components/changeMax.vue';
  import reset from './components/reset.vue';  
</script>

<template>
  <div class="game-container">
    <div class="display"> 
      <display /> 
    </div>

    <div class="buttons">
      <buttons />
    </div>

    <div class="settings">
      <div class="change">
        <changeMax />  
      </div>

      <div class="reset">
        <reset />  
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.game-container{
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #787878;
  border-radius: 30px;  
  font-family: 'Arial', sans-serif;

}

.display{
  background: #222;
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 2px solid #555;  
}

.buttons{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #2d2d2d;
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid #666; 
  margin-bottom: 1.5rem; 
}

.settings{
  display: grid;
  grid-template-columns: 1fr 1fr;    
}

.change{
  background: #2d2d2d;
  border-radius: 20px;
  padding: 1rem;
  border: 2px solid #666;  
  margin-right: 1.5rem;
}

.reset {
  background: #2d2d2d;
  border-radius: 20px;
  padding: 1rem;
  border: 2px solid #666;  
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
