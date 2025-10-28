<template>
    <div>
        <h4 style="color: blue;">Número Hijo :{{ numero }}</h4>
        <button @click="sumarNumero">Sumar Número</button>
    </div>
</template>

<script>
export default {
    name:"HijoNumeros",
    props:["numero"]
    ,mounted(){
        console.log(this.numero)
    },
    methods:{
        sumarNumero() {
            console.log("Soy el hijo " + this.numero);
            //NECESITAMOS ENVIAR INFORMACION SE REALIZA A PARTIR DE LA LLAMADA
            //CON CADA PARAMENTRO SEPARADO CON COMAS. DENTRO DEL METODO EMIT
            //$.emit
            this.$emit("sumarNumero",this.numero)
        }
    }

}
</script>

<style>

</style>