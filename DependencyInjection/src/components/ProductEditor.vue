<template>
  <div>
    <editor-field label="ID" editorFor="id" />
    <editor-field label="Nazwa" editorFor="name" />
    <editor-field label="Cena" editorFor="price"/>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? "Zapisz" : "Utwórz" }}
      </button>
      <button class="btn btn-secondary" v-on:click="cancel">Anuluj</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import EditorField from "./EditorField";
export default {
  name: "ProductEditor",
  data: function () {
    return {
      editing: false,
      product: {
        id: 0,
        name: "",
        price: 0
      },
      localBus: new Vue()
    }
  },
  components: { EditorField },
  methods: {
    startEdit(product) {
      this.editing = true;
      this.product = {
        id: product.id,
        name: product.name,
        price: product.price
      };
    },
    startCreate() {
      this.editing = false;
      this.product = {
        id: 0,
        name: "",
        price: 0
      };
    },
    save() {
      this.eventBus.$emit("complete", this.product);
      console.log(`Zakończono edycję: ${JSON.stringify(this.product)}`);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  inject: ["eventBus"],
  provide: function () {
    return {
      editingEventBus: this.localBus
    }
  },
  created() {
    this.eventBus.$on("create", this.startCreate);
    this.eventBus.$on("edit", this.startEdit);
    this.localBus.$on("change",
      (change) => this.product[change.name] = change.value
    );
  },
  watch: {
    product(newValue, oldValue) {
      this.localBus.$emit("target", newValue);
    }
  }
}
</script>
