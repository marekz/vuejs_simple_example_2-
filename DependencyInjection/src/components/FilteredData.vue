<template>
  <div>
    <h3 class="bg-primary text-center text-white p-2">
      Dane dla kategorii {{ category }}
    </h3>
    <div class="text-center m-2">
      <label>Kategoria: </label>
      <select v-model="category">
        <option>Wszystkie</option>
        <option>Sporty wodne</option>
        <option>Piłka nożna</option>
        <option>Szachy</option>
      </select>
    </div>
    <h3 v-if="loading" class="bg-info text-white text-center p-2">
      Wczytywanie danych...
    </h3>
    <table v-else class="table table-sm table-bordered">
      <tr>
        <th>Id</th>
        <th>Nazwa</th>
        <th>Kategoria</th>
        <th>Cena</th>
      </tr>
      <tbody>
        <tr v-for="p in data" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Axios from "axios";
const baseUrl = "http://localhost:3500/products/";
export default {
  data: function() {
    return {
      loading: true,
      data: [],
      category: "Wszystkie"
    }
  },
  methods: {
    async getData(route) {
      if (route.params != null && route.params.category != null) {
        this.category = route.params.category;
      } else {
        this.category = "Wszystkie"
      }
      let url = baseUrl +
          (this.category === "Wszystkie" ? "" : `?category=${this.category}`);
      this.data.push(...(await Axios.get(url)).data);
      this.loading = false;
    }
  },
  watch: {
    category() {
      this.$router.push(`/filter/${this.category}`);
    }
  },
  async beforeRouteEnter(to, from, next) {
    if (to.params.category !== "Wszystkie") {
      next("/filter/Wszystkie");
    } else {
      next(async component => {
        component.$store.commit("setComponentLoading", false);
        await component.getData(to);
      });
    }
  },
  async beforeRouteUpdate(to, from, next) {
    this.data.splice(0, this.data.length);
    await this.getData(to);
    next();
  }
}
</script>