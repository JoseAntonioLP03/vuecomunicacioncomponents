<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Deportes</router-link>
            </li>
            <li>
                <router-link to="/comics">Comics</router-link>
            </li>
            <li>
                <router-link to="/numeros">Números</router-link>
            </li>
            <li>
                <router-link to="/numerodoble">Numero Doble SIN</router-link>
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/numerodoble/'+ num"> Doble {{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
    data(){
        return{
            numeros:[3,17,2005]
        }
    }
}
</script>

<style>
</style>