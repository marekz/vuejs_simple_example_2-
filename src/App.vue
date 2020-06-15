<template>
  <div class="bg-primary text-white m-2 p-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="checked" />
      <label>Pole checkbox</label>
    </div>
    Stan zaznaczenia: {{ checked }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      checked: true
    }
  },
  beforeCreate() {
    console.log("Wywołanie metody beforeCreate " + this.checked);
  },
  created() {
    console.log("Wywołanie metody created " + this.checked);
  },
}
</script>
