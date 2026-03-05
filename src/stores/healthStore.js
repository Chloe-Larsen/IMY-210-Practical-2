import { defineStore } from "pinia";

export const healthStore = defineStore('health', {
    state: () => ({
        health: 0,
        maxHealth: 10        
    }),
    getters: {
        isAtMax(){
            return this.health === this.maxHealth;
        },

        isDead(){
            return this.health === 0;
        },

        canEditMaxHealth(){
            return this.health === 0;
        },

        healthPercentage(){
            return (this.health / this.maxHealth) * 100;
        },
    },
    actions: {
        heal(){
            if(this.health < this.maxHealth)
                this.health += 1;
        },
        takeDamage(){
            if(this.health > 0)
            this.health -= 1;
        },
        changeMaxHealth(newMaxHealth){
            this.maxHealth = Number(newMaxHealth);
        },
        reset(){
            this.health = 0;
            this.maxHealth = 10;
        }
    }
})