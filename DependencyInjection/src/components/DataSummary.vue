<template>
  <div>
    <h3 class="bg-success text-center text-white p-2">
      Podusmowanie
    </h3>
    <table class="table">
      <tr><th>Liczba produktów: </th><td> {{ products.length }} </td></tr>
      <tr><th>Liczba kategorii: </th><td> {{ categoryCount }} </td></tr>
      <tr>
        <th>Najwyższa cena: </th><td> {{ highestPrice | currency }} </td>
      </tr>
    </table>
  </div>
</template>
<script>
import {
  mapState,
} from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
    categoryCount() {
      if (this.products.length > 0) {
        return this.products.map(p => p.category)
            .filter((cat, index,arr) => arr.indexOf(cat) == index).length;
      } else {
        return 0;
      }
    },
    highestPrice() {
      if (this.products.length == 0) {
        return 0;
      } else {
        return Math.max(...this.products.map(p => p.price));
      }
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN"
      }).format(value);
    }
  }
}
</script>