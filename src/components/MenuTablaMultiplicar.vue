<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/tablamultiplicar/'+ num"> Tabla del: {{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuTablaMultiplicar",
    data(){
        return{
            numeros:[]
        }
    },
    mounted(){
        this.generarNumeros()
    },
    methods:{
        generarNumeros() {
            this.numeros = [];
            for (let i = 1; i <= 10; ++i) {
                const random = Math.floor(Math.random() * 100) + 1;
                this.numeros.push(random);
            }
            }
    }
}
</script>

<style>
</style>