<template>
  <div class="mx-5 p-2 border border-dark">
    <h3 class="bg-success text-white text-center p-2">
      Liczby
    </h3>
    <div class="row">
      <div class="col">
        <input v-colorize:bg-info.bg="first > 45"
               class="form-control"
               v-model.number="first" />
      </div>
      <div class="col-1 h3">+</div>
      <div class="col">
        <input v-colorize:bg-info="second > 30"
               class="form-control"
               v-model.number="second" />
      </div>
      <div v-colorize.bg.text="total > 50" class="col h3">= {{ total }} </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/numbersMixins";
export default {
  computed: {
    total() {
      return this.first + this.second;
    }
  },
  mixins: [ mixin ]
}
</script>