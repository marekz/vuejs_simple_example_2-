<template>
  <div class="bg-dark text-light text-center p-2">
    <div>
      Stan licznika: {{ counter }}
    </div>
    <button class="btn btn-secondary" v-on:click="handleClick">
      Zwiększ
    </button>
    <button class="btn btn-secondary" v-on:click="generateError">
      Wygeneruj błąd
    </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter_base: 0,
        generate_error: false
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
        this.counter_base++
      },
      generateError() {
        this.generate_error = true;
      }
    },
    computed: {
      counter() {
        if (this.generate_error) {
          throw "Mój błąd w komponencie";
        } else {
          return this.counter_base;
        }
      }
    }
  }
</script>

<style scoped>

</style>