<template>
    <div>
        <h4 style="color: blue;">Padre Deportes</h4>
        <h2 style="background-color: yellow;" v-if="favorito">
            Su deporte favorito es: {{ favorito }}
        </h2>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeportes :nombredeporte="deporte" 
                v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeportes from './HijoDeportes.vue';
export default {
    name:"PadreDoportes",
    components:{
        HijoDeportes
    },
    data(){
        return{
            deportes:["Futbol","Basquetball","Tennis","Rugby"],
            favorito: null
        }
    },
    methods:{
        seleccionarFavoritoParent(deporteFavorito){
            console.log("Yo soy tu padre")
            this.favorito = deporteFavorito
        }
    }
}
</script>

<style>

</style>