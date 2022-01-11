<template>
  <div>
    <h3 class="btn-primary text-center text-white p-2">
      {{ editing ? "Edytuj" : "Utwórz" }}
    </h3>
    <div class="form-group">
      <label>ID</label>
      <input class="form-control" v-model="product.id" />
    </div>
    <div class="form-group">
      <label>Nazwa</label>
      <input class="form-control" v-model="product.name" />
    </div>
    <div class="form-group">
      <label>Kategoria</label>
      <input class="form-control" v-model="product.category" />
    </div>
    <div class="form-group">
      <label>Cena</label>
      <input class="form-control" v-model.number="product.price" />
    </div>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? "Zapisz" : "Utwórz" }}
      </button>
      <router-link v-bind:to="{name: 'table'}" class="btn btn-secondary">Anuluj</router-link>
    </div>
  </div>
</template>

<script>
let unwatcher;
export default {
  data: function () {
    return {
      editing: false,
      product: {}
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch("saveProductAction", this.product);
      this.$router.push({
        name: "table"
      });
      this.product = {};
    },
    selectProduct(selectedProduct) {
      if (this.$route.params.op == "create") {
        this.editing = false;
        this.product = {};
      } else {
        let productId = this.$route.params.id;
        let selectedProduct = this.$store.state.products.find(
            p => p.id == productId
        );
        this.product = {};
        Object.assign(this.product, selectedProduct);
        this.editing = true;
      }
    }
  },
  created() {
    unwatcher = this.$store.watch(
        state => state.products,
        this.selectProduct);
    this.selectProduct();
  },
  beforeDestroy() {
    unwatcher();
  }
}
</script>
