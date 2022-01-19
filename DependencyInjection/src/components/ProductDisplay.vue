<template>
<div>
  <table class="table table-sm table-bordered"
         v-bind:class="'table-striped' == striped">
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
          <router-link v-bind:to="{ name: 'editor',
                          params: { op: 'edit', id: p.id}}"
                       v-bind:class="editClass"
                       class="btn btn-sm">
            Edytuj
          </router-link>
          <button class="btn btn-sm"
            v-bind:class="deleteClass"
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
    <router-link v-bind:to="{name: 'editor', params: { op: 'create'}}"
                 class="btn btn-primary">
      Utwórz nowy
    </router-link>
  </div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
} from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
    ...mapState({
      striped: state => state.prefs.stripedTable
    }),
    ...mapGetters({
      tableClass: "prefs/tableClass",
      editClass: "prefs/editClass",
      deleteClass: "prefs/deleteClass"
    })
  },
  methods: {
    editProduct(product) {
      this.selectProduct(product)
      // this.selectComponent("editor");
      this.$router.push("/edit")
    },
    createNew() {
      this.selectProduct();
      // this.selectComponent("editor");
      this.$router.push("/edit")
    },
    ...mapMutations({
      selectProduct: "selectProduct",
      // selectComponent: "nav/selectComponent",
      setEditButtonColor: "prefs/setEditButtonColor",
      setDeleteButtonColor: "prefs/setDeleteButtonColor"
    }),
    ...mapActions({
      // getProducts: "getProductsAction",
      deleteProduct: "deleteProductAction"
    })
  },
}
</script>