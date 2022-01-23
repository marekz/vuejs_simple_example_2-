<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group">
          <router-link tag="button" to="/products"
                       exact-active-class="btn-info"
                       class="btn btn-primary">
            Produkty
          </router-link>
          <router-link tag="button" to="/preferences"
                       exact-active-class="btn-info"
                       class="btn btn-primary">
            Preferencje
          </router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from "vuex";

export default {
  name: 'App',
  created() {
    this.$store.dispatch("getProductsAction");
  },
}
</script>