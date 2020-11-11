<template>
<div>
  <table class="table table-sm table-striped table-bordered">
    <tr>
      <th>ID</th><th>Nazwa</th><th>Cena</th><th></th>
    </tr>
    <tbody>
      <tr v-for="p in products" v-bind:key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.name }}</td>
        <td>{{ p.price | currency }}</td>
        <td>
          <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
            Edytuj
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <button class="btn btn-primary" v-on:click="createView">
      Utwórz nowy
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductDisplay",
  data: function () {
    return {
      products: [
        { id: 1, name: "Kajak", price: 275 },
        { id: 2, name: "Kamizelka ratunkowa", price: 46.95 },
        { id: 3, name: "Piłka nożna", price: 19.50 },
        { id: 4, name: "Chorągiewki narożne", price: 39.95 },
        { id: 5, name: "Stadion", price: 79500 }
      ]
    }
  },
  filters: {
    currency(value) {
      return `${value.toFixed(2)} PLN`;
    }
  },
  methods: {
    createNew() {
      this.eventBus.$emit("create");
    },
    editProduct(product) {
      this.eventBus.$emit("edit", product);
    }
  },
  inject: ["eventBus"]
}
</script>