<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 m-3">
        <product-display></product-display>
      </div>
      <div class="col m-3">
        <product-editor></product-editor>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDisplay from './components/ProductDisplay';
import ProductEditor from "./components/ProductEditor";

export default {
  name: 'App',
  components: {
    ProductDisplay,
    ProductEditor
  },
  provide: function() {
    return {
      colors: {
        bg: "bg-secondary",
        text: "text-white"
      }
    }
  }
}
</script>
