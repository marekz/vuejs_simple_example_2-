<template>
  <div class="form-group">
    <label>{{ formattedLabel }}</label>
    <input v-model.number="value" class="form-control" v-bind:class="[colors.bg, colors.text]" />
  </div>
</template>

<script>
export default {
  name: "EditorField",
  props: ["label"],
  data: function () {
    return {
      value: "",
      formattedLabel: this.format(this.label)
    }
  },
  inject: {
    colors: "colors",
    format: {
      from: "labelFormatter",
      default: () => (value) => `Domyślne ${value}`
    }
  }
}
</script>

<style scoped>

</style>