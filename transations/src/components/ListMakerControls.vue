<template>
  <tfoot>
  <transition v-on:before-enter="beforeEnter"
              v-on:after-enter="afterEnter" mode="out-in">
    <tr v-if="showAdd" key="addcancel">
      <td></td>
      <td><input class="form-control" v-model="currentItem" /></td>
      <td>
        <button id="add" class="btn btn-sm btn-info" v-on:click="handleAdd">
          Dodaj
        </button>
        <button id="cancel" class="btn btn-sm btn-secondary"
                v-on:click="showAdd = false">
          Anuluj
        </button>
      </td>
    </tr>
    <tr v-else key="show">
      <td colspan="4" class="text-center p-2">
        <button class="btn btn-info" v-on:click="showAdd = true">
          Pokaż dodawanie
        </button>
      </td>
    </tr>
  </transition>
  </tfoot>
</template>

<script>
export default {
  data: function() {
    return {
      showAdd: false,
      currentItem: ""
    }
  },
  methods: {
    handleAdd() {
      this.$emit("add", this.currentItem);
      this.showAdd = false;
    },
    beforeEnter(el) {
      if (this.showAdd) {
        el.classList.add("animated", "fadeIn");
      }
    },
    afterEnter(el) {
      el.classList.remove("animated", "fadeIn");
    }
  }
}
</script>