<template>
  <div>
    <h1>Ejemplo CheckBox</h1>
    <button @click="generarNumeros">
      Generar Checkbox
    </button>

    <div v-for="numero in numeros" :key="numero">
      <input 
        type="checkbox" 
        v-model="seleccionados"
        :value="numero"
        @change="calcularSuma"
      >
      <label>{{ numero }}</label>
    </div>

    <h4 style="color: blue;">La suma seleccionada es: {{ sumatorio }}</h4>
  </div>  
</template>

<script>
export default {
  name: "SumaCheckBox",
  data() {
    return {
      numeros: [], 
      seleccionados: [],
      sumatorio: 0, 
    };
  },
  methods: {
    generarNumeros() {
      this.numeros = [];
      this.seleccionados = [];
      this.sumatorio = 0;
      for (let i = 1; i <= 10; ++i) {
        const random = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(random);
      }
    },
    calcularSuma() {
      let total = 0;
      for (let i = 0; i < this.seleccionados.length; i++) {
        total += parseInt(this.seleccionados[i]);
      }
      this.sumatorio = total;
    }
  }
};
</script>

<style>
</style>
