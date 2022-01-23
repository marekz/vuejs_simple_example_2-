<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <h3 class="bg-secondary text-white text-center p-2">Widok lewy</h3>
        <router-view name="left" class="border border-secondary p-2"/>
      </div>
      <div class="col text-center m-2">
        <h3 class="bg-secondary text-white text-center p-2">Widok prawy</h3>
        <router-view name="right" class="border border-secondary p-2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBySide"
}
</script>

<style scoped>

</style>