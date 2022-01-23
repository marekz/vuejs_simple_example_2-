<template>
  <div>
    <h4 class="bg-info text-white text-center p-2">Preferencje</h4>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-bind:checked="primaryEdit" v-on:input="setPrimaryEdit">
      <label class="form-check-label">Główny kolor dla przycisków edycji</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-bind:checked="dangerDelete" v-on:input="setDangerDelete">
      <label class="form-check-label">Kolor ostrzeżenia dla przycisków usuwania</label>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from "vuex";

export default {
  computed: {
    ...mapState({
      primaryEdit: state => state.prefs.promaryEditButton,
      dangerDelete: state => state.prefs.dangerDeleteButton
    })
  },
  methods: {
    setPrimaryEdit() {
      this.$score.commit("prefs/setEditButtonColor", !this.primaryEdit);
    },
    setDangerDelete() {
      this.$store.commit("prefs/setDeleteButtonColor", !this.dangerDelete);
    }
  }
}
</script>