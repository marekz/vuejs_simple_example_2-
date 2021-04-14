<template>
<div>
  <table class="table table-sm table-striped table-bordered">
    <tr>
      <th>ID</th>
      <th>Nazwa</th>
      <th>Kategoria</th>
      <th>Cena</th>
      <th></th>
    </tr>
    <tbody>
      <tr v-for="p in products" v-bind:key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.name }}</td>
        <td>{{ p.category }}</td>
        <td>{{ p.price }}</td>
        <td>
          <button class="btn btn-sm btn-primary"
                  v-on:click="editProduct(p)">
            Edytuj
          </button>
          <button class="btn btn-sm btn-danger ml-1"
            v-on:click="deleteProduct(p)">
            Usuń
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
export default {
  // data: function () {
  //   return {
  //     products: []
  //   }
  // },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    createNew() {},
    editProduct(product) {},
    deleteProduct(product) {
      this.$store.commit("deleteProduct", product);
    }
  }
}
</script>