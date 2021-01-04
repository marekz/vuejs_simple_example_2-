<template>
<div>
  <table class="table table-sm table-striped table-bordered">
    <tr>
      <th>ID</th><th>Nazwa</th><th>Kategoria</th><th>Cena</th><th></th>
    </tr>
    <tbody>
      <tr v-for="p in products" v-bind:key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.name }}</td>
        <td>{{ p.category }}</td>
        <td>{{ p.price | currency }}</td>
        <td>
          <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
            Edytuj
          </button>
        </td>
      </tr>
      <tr v-if="products.length === 0">
        <td colspan="5" class="text-center">Brak danych</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button class="btn btn-primary" v-on:click="createNew">
      Utwórz nowy
    </button>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
const baseUrl = "http://localhost:3500/products/";
export default {
  data: function () {
    return {
      products: []
    }
  },
  methods: {
    createNew() {
      this.eventBus.$emit("create");
    },
    editProduct(product) {
      this.eventBus.$emit("edit", product);
    },
    processProducts(newProducts) {
      this.products.splice(0);
      this.products.push(...newProducts);
    }
  },
  inject: ["eventBus"],
  // created() {
  //   Axios.get(baseUrl).then(resp => {
  //     console.log(`Odpowiedź HTTP: ${resp.status}, ${resp.statusText}`);
  //     console.log(`Dane odpowiedzi: ${resp.data.length} elementów`);
  //     this.processProducts(resp.data);
  //   });
  // }
  async created() {
    let data = (await Axios.get(baseUrl)).data;
    this.processProducts(data);
  }
}
</script>