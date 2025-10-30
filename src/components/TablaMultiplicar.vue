<template>
  <div>
    <h1>Tabla multiplicar</h1>
    <table>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in tabla" :key="idx">
                <td>{{ item.operacion }}</td>
                <td>{{ item.resultado }}</td>
            </tr>
        </tbody>
    </table>
    <button @click="redirectToHome()">Volver a Home</button>
  </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    methods:{
        redirectToHome(){
            this.$router.push("/");
        }
    },
    data(){
        return{
            mensaje: "",
            tabla: []
        }
    },
    mounted(){
        console.log("Param: " + this.$route.params.numero)
        //LOS PARAMETROS SIEMPRE SON STRING NO IMPORTA SI SON NUMEROS
        let numero = parseInt(this.$route.params.numero);
        if(isNaN(numero)){
            this.mensaje = "Sin parámetros en Routing";
        }else{
            this.mensaje = "Parámetro recibido: " + numero;
            for (let i = 1; i <= 10; i++) {
                this.tabla.push({
                    operacion: `${numero} x ${i}`,
                    resultado: numero * i
                });
            }
        }
    },
    watch: {
        '$route.params.numero'(nextval, oldval) {
            if (nextval !== oldval) {
                const numero = parseInt(nextval);
                this.tabla = [];
                if (isNaN(numero)) {
                    this.mensaje = "Sin parámetros en Routing";
                } else {
                    this.mensaje = "Parámetro recibido: " + numero;
                    for (let i = 1; i <= 10; i++) {
                        this.tabla.push({
                            operacion: `${numero} x ${i}`,
                            resultado: numero * i
                        });
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>