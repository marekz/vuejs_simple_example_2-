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
      <button class="btn btn-secondary" v-on:click="cancel">Anuluj</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      editing: false,
      product: {}
    }
  },
  methods: {
    save() {
      this.$store.dispatch("saveProductAction", this.product);
      this.product = {};
    },
    cancel() {
      this.$store.commit("selectProduct");
    }
  },
  created() {
    this.$store.watch(state => state.selectedProduct,
        (newValue, oldValue) => {
          if (newValue === null) {
            this.editing = false;
            this.product = {};
          } else {
            this.editing = true;
            this.product = {};
            Object.assign(this.product, newValue);
          }
        }
    );
  }
}
</script>
