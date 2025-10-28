<template>
  <div>
    <h1>Selección Múltiple</h1>
    <form @submit.prevent="mostrarSeleccionados">
      <select multiple size="10" v-model="seleccionados">
        <option v-for="elemento in elementos" :key="elemento">
          {{ elemento }}
        </option>
      </select>

      <button type="submit">
        Mostrar Seleccionados
      </button>
    </form>

    <p>
      Seleccionados: {{ textoSeleccionados }}
    </p>
  </div>  
</template>

<script>
export default {
  name: "SeleccionMultiple",
  data() {
    return {
      elementos: [
        "Elemento 1",
        "Elemento 2",
        "Elemento 3",
        "Elemento 4",
        "Elemento 5",
        "Elemento 6",
        "Elemento 7",
        "Elemento 8",
        "Elemento 9",
        "Elemento 10"
      ],
      seleccionados: [],      
      textoSeleccionados: ""  
    };
  },
  methods: {
    mostrarSeleccionados() {
      this.textoSeleccionados = this.seleccionados.join(",");
    }
  }
};
</script>

<style>

</style>
