<template>
  <h3 class="bg-success text-white text-center p-2">
    Komunikat: {{ message }}
  </h3>
</template>

<script>
export default {
  props: ["message"]
}
</script>

<style scoped>

</style>