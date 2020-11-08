<template>
  <div class="bg-dark text-light text-center p-2">
    <div>
      Stan licznika: {{ counter }}
    </div>
    <button class="btn btn-secondary" v-on:click="handleClick">
      Zwiększ
    </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 0
      }
    },
    created: function() {
      console.log("MessageDisplay: created");
    },
    beforeDestroy: function() {
      console.log("MessageDisplay: beforeDestroy");
    },
    destroyed: function() {
      console.log("MessageDisplay: destroyed");
    },
    methods: {
      handleClick() {
        this.counter++
      }
    }
  }
</script>

<style scoped>

</style>