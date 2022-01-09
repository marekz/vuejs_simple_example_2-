<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col m-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductDisplay from './components/ProductDisplay';
// import ProductEditor from "./components/ProductEditor";
// import ErrorDisplay from "./components/ErrorDisplay";
// import LoadingMessage from "./components/LoadingMessage";
// const DataSummary = () => ({
//   component: import(/* webpackChunkName: "advanced" */"./components/DataSummary"),
//   loading: LoadingMessage,
//   delay: 100
// });

import {
  mapState,
  mapMutations
} from "vuex";

export default {
  name: 'App',
  // components: {
  //   ProductDisplay,
  //   ProductEditor,
  //   ErrorDisplay,
  //   DataSummary
  // },
  created() {
    this.$store.dispatch("getProductsAction");
  },
  // methods: {
  //   ...mapMutations({
  //     selectComponent: "nav/selectComponent"
  //   })
  // },
  // computed: {
  //   ...mapState({
  //     selected: state => state.nav.selected
  //   }),
  //   selectedComponent() {
  //     switch (this.selected) {
  //       case "table":
  //         return ProductDisplay;
  //       case "editor":
  //         return ProductEditor;
  //       case "summary":
  //         return DataSummary;
  //     }
  //
  //     return ProductDisplay;
  //   }
  // }
}
</script>
