<template>
    <div>
        <h4 style="color: red;">{{ nombredeporte }}</h4>
        <button @click="seleccionarFavorito">Seleccionar Favorito</button>
    </div>
</template>

<script>
export default {
    name:"HijoDeportes",
    props:["nombredeporte"]
    ,mounted(){
        console.log(this.nombredeporte)
    },
    methods:{
        seleccionarFavorito() {
            console.log("Soy el hijo " + this.nombredeporte);
            //NECESITAMOS ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
            //CON CADA PARAMENTRO SEPARADO CON COMAS. DENTRO DEL METODO EMIT
            //$.emit
            this.$emit("seleccionarFavoritoParent",this.nombredeporte)
        }
    }

}
</script>

<style>

</style>