<template>
  <div class="container-fluid">
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
import { mapState } from "vuex";

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
  computed: {
    ...mapState({
      selected: state => state.nav.selected
    }),
    selectedComponent() {
      return this.selected == "table" ? ProductDisplay : ProductEditor;
    }
  }
}
</script>
