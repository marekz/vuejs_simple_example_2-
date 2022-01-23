<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group">
          <router-link tag="button" to="/list" exact-active-class="btn-info" class="btn btn-primary">
            Lista
          </router-link>
          <router-link tag="button" to="/create" exact-active-class="btn-info" class="btn btn-primary">
            Utwórz
          </router-link>
          <router-link tag="button" to="/edit" exact-active-class="btn-info" class="btn btn-primary">
            Edytuj
          </router-link>
          <router-link tag="button" to="/edit/1" exact-active-class="btn-info" class="btn btn-primary">
            Edytuj kajak
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

<style scoped>
  li { text-align: left; color: blue; background-color: lightblue }
  router-link { text-align: right; color: yellow; background-color: red }
  .router-link-active { font-size: xx-large; }
  .router-link-exact-active { font-weight: bolder; }
</style>