<template>
  <div>
    <editor-field label="ID" />
    <editor-field label="Nazwa" />
    <editor-field label="Cena" />
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? "Zapisz" : "Utwórz" }}
      </button>
      <button class="btn btn-secondary" v-on:click="cancel">Anuluj</button>
    </div>
  </div>
</template>

<script>
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
      }
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
      // TODO - przetwórz zmieniony lub utworzony produkt
      console.log(`Zakońćzono edycję: ${JSON.stringify(this.product)}`);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  // provide: function () {
  //   return {
  //     colors: {
  //       bg: "ng-light",
  //       text: "text-danger"
  //     }
  //   }
  // }
}
</script>
