<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input v-model.number="value" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "EditorField",
  props: ["label"],
  data: function () {
    return {
      value: ""
    }
  }
}
</script>

<style scoped>

</style>