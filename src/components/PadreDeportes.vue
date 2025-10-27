<template>
    <div>
        <h4 style="color: blue;">Padre Deportes</h4>
        <ul>
            <li v-for="deporte in deportes" :key="deporte">
                <HijoDeportes :nombredeporte="deporte"/>
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
            deportes:["Futbol","Basquetball","Tennis","Rugby"]
        }
    }
}
</script>

<style>

</style>