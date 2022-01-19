<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <ol>
          <router-link tag="li" to="/list" class="m-1">Lista</router-link>
          <router-link tag="li" to="/create" class="m-1">Utwórz</router-link>
          <router-link tag="li" to="/edit" class="m-1">Edytuj</router-link>
          <router-link tag="li" to="/edit/1" class="m-1">Edytuj Kajak</router-link>
        </ol>
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