<template>
    <div>
        <h2 style="color: black;">Padre Numeros</h2>
        <h2 style="color: red;">
            La suma es: {{ sumatoria }}
        </h2>
        <button @click="generarNumeroRandom">Nuevo Número</button>
        <ul>
            <li v-for="numero in numeros" :key="numero">
                <HijoNumeros :numero="numero" 
                v-on:sumarNumero="sumarNumero"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoNumeros from './HijoNumeros.vue';
export default {
        name:"PadreNumero",
        components:{
            HijoNumeros
        },
        data(){
            return{
                sumatoria: 0,
                numeros:[10,50],
            }
        },
        methods:{
            sumarNumero(numeroASumar){
                console.log("Sumar numero")
                this.sumatoria = this.sumatoria + numeroASumar
        },
            generarNumeroRandom(){
                var random = Math.floor(Math.random() * 1000) + 1;
                this.numeros.push(random);

        }

    }
}

</script>

<style>

</style>