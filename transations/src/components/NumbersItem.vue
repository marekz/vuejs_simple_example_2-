<template>
  <div class="mx-5 p-2 border border-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <input class="form-control" v-model.number="first" />
        </div>
        <div class="col-1 h3">+</div>
        <div class="col">
          <input class="form-control" v-model.number="second" />
        </div>
        <div class="col h3"> {{ displayTotal }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  tween
} from "popmotion";

export default {
  data: function() {
    return {
      first: 10,
      second: 20,
      displayTotal: 30
    }
  },
  computed: {
    total() {
      return this.first + this.second;
    }
  },
  watch: {
    total(newVal, oldVal) {
      let t = tween({
        from: Number(oldVal),
        to: Number(newVal),
        duration: 250
      });
      t.start((val) => this.displayTotal = val.toFixed(0));
    }
  }
}
</script>