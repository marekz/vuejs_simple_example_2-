<template>
  <div class="mx-5 border border-dark p-2">
    <h3 class="bg-warning text-white text-center p-2">Wyświetlacz</h3>
    <transition>
      <div v-if="show" class="h4 bg-info text-center p-2">Cześć, Kolo...</div>
    </transition>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="toggle">
        Przełącz widoczność
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>

<style>
  .v-leave-active {
    opacity: 0;
    font-size: 0em;
    transition: all 250ms;
  }
  .v-enter {
    opacity: 0;
    font-size: 0em;
  }
  .v-enter-to {
    opacity: 1;
    font-size: x-large;
    transition: all 250ms;
  }
</style>