<template>
  <div>
    <h1>Numero doble</h1>
    <h2 style="color: aquamarine;">{{ mensaje }}</h2>
    <label>Introduzca un numero</label>
    <h3 style="color: red;">Numero doble: {{ doble }}</h3>
    <button @click="redirectToHome()">Volver a Home</button>
  </div>
</template>

<script>
export default {
    name:"NumeroDoble",
    methods:{
        redirectToHome(){
            this.$router.push("/");
        }
    },
    mounted(){
        console.log("Param: " + this.$route.params.numero)
        //LOS PARAMETROS SIEMPRE SON STRING NO IMPORTA SI SON NUMEROS
        let numero = this.$route.params.numero;
        if(numero === ""){
            this.mensaje = "Sin parámetros en Roting"
        }else{
            this.mensaje = "Parámetro recibido" + numero;
            this.doble = parseInt(numero)*2;
        }
    },
    data(){
            return{
                mensaje: "",
                doble: 0
                 
            }
    },
    watch: {
        '$route.params.numero'(nextval,oldval){
            if(nextval != oldval){
                this.mensaje = "Esto ha cambiado "
                + this.$route.params.numero;
                this.doble = parseInt(this.$route.params.numero)*2
                console.log("Next: "+ nextval)
                console.log("Old: "+ oldval)
            }
        }
    }
}
</script>

<style>

</style>