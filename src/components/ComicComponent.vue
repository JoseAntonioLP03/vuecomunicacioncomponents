<template>
    <div>
        <h3 style="color: dodgerblue;">{{ comic.titulo }}</h3>
        <p>{{ comic.descripcion }}</p>
        <img :src="comic.imagen"/>
        <h4 :class="{
            rojo: comic.year < 2000, verde: comic.year > 2000
        }">
            Año: {{ comic.year }}
        </h4>
        <button @click="seleccionarFavorito()" class="verde">
            Seleccionar favorito
        </button>
        <button @click="deleteComic()" class="rojo">
            Eliminar comic
        </button>
    </div>
</template>

<script>
export default {
    name:"ComicComponent",
    props:["comic","index"],
    methods:{
        seleccionarFavorito(){
            this.$emit("seleccionarFavorito",this.comic)
        },
        deleteComic(){
            this.$emit("deleteComic",this.index);
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style>
    @import './../assets/css/comics.css';
</style>