<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group btn-group-toggle">
          <label class="btn btn-info"
                 v-bind:class="{active: (selected == 'table') }">
            <input type="radio" v-model="selected" value="table" />
            Tabela
          </label>
          <label class="btn btn-info"
                 v-bind:class="{active: (selected == 'editor') }">
            <input type="radio" v-model="selected" value="editor" />
            Edytor
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <component v-bind:is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay';
import ProductEditor from "./components/ProductEditor";
import ErrorDisplay from "./components/ErrorDisplay";

export default {
  name: 'App',
  components: {
    ProductDisplay,
    ProductEditor,
    ErrorDisplay
  },
  created() {
    this.$store.dispatch("getProductsActions");
  },
  data: function() {
    return {
      selected: "table"
    }
  },
  computed: {
    selectedComponent() {
      return this.selected == "table" ? ProductDisplay : ProductEditor;
    }
  }
}
</script>
