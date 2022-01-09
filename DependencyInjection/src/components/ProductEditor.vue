<template>
  <div>
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
      <router-link to="/" class="btn btn-secondary">Anuluj</router-link>
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
      // this.$store.commit("nav/selectComponent", "table");
      this.$router.push("/");
      this.product = {};
    },
    // cancel() {
    //   this.$store.commit("selectProduct");
    //   this.$store.commit("nav/selectComponent", "table")
    //   this.$router.push("/");
    // },
    selectProduct(selectedProduct) {
      if (selectedProduct == null) {
        this.editing = false;
        this.product = {};
      } else {
        this.editing = true;
        this.product = {};
        Object.assign(this.product, selectedProduct);
      }
    }
  },
  created() {
    unwatcher = this.$store.watch(state =>
      state.selectedProduct, this.selectProduct);
    this.selectProduct(this.$store.state.selectedProduct);
  },
  beforeDestroy() {
    unwatcher();
  }
}
</script>
