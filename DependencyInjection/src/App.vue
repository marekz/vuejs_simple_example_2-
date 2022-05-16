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
          <router-link to="/named/tableleft"
                       class="btn btn-primary"
                       active-class="btn-info">
            Tabela po lewej
          </router-link>
          <router-link to="/named/tableright"
                       class="btn btn-primary"
                       active-class="btn-info">
            Tabela po prawej
          </router-link>
          <router-link to="/filter/Wszystkie" class="btn btn-primary"
                       active-class="btn-info">
            Przefiltrowane dane
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