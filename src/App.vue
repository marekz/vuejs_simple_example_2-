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
    <div class="text-white center my-2">
      <button class="btn btn-light" v-on:click="doChange">
        Zmień
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
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
  },
  beforeUpdate() {
    console.log(`Wywołano metodę beforeUpdate. Stan zaznaczenia: ${this.checked}`
      + ` Imię: ${this.names[0]} Element listy: `
      + this.$el.getElementsByTagName("li").length);
  },
  updated() {
    console.log(`Wywołano metodę updated. Stan zaznaczenia: ${this.checked}`
      + ` Imię: ${this.names[0]} Element listy: `
      + this.$el.getElementsByTagName("li").length);
  },
  methods: {
    doChange() {
      this.checked = !this.checked;
      this.names.reverse();
      Vue.nextTick(() => console.log('Wykonano wywołanie zwrotne'));
    }
  }
}
</script>
