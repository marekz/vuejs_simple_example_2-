<template>
  <div>
    <div class="form-group">
      <label>ID</label>
      <input class="form-controll" v-model="product.id" />
    </div>
    <div class="form-group">
      <label>Nazwa</label>
      <input class="form-controll" v-model="product.name" />
    </div>
    <div class="form-group">
      <label>Kategoria</label>
      <input class="form-controll" v-model="product.category" />
    </div>
    <div class="form-group">
      <label>Cena</label>
      <input class="form-controll" v-model.number="product.price" />
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
    startEdit(product) {
      this.editing = true;
      this.product = {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price
      };
    },
    startCreate() {
      this.editing = false;
      this.product = {};
    },
    save() {
      this.eventBus.$emit("complete", this.product);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("create", this.startCreate);
    this.eventBus.$on("edit", this.startEdit);
  }
}
</script>
