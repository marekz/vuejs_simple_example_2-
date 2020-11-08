<template>
  <div class="bg-primary text-white m-2 p-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="checked" />
      <label>Pole checkbox</label>
    </div>
    Stan zaznaczenia: {{ checked }}
    <div class="bg-info p-2">
      Imiona:
      <ul>
        <li v-for="name in names" v-bind:key="name">
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      checked: true,
      names: []
    }
  },
  beforeCreate() {
    console.log("Wywołanie metody beforeCreate " + this.checked);
  },
  created() {
    console.log("Wywołanie metody created " + this.checked);
  },
  mounted() {
    this.$el.dataset.names.split(",").forEach(name => this.names.push(name));
  }
}
</script>
