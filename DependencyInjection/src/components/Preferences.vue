<template>
  <div>
    <div v-if="displayWarning" class="text-center m-2">
      <h5 class="bg-danger text-white p-2">
        Czy masz pewność?
      </h5>
      <button class="btn btn-danger" v-on:click="doNavigation">
        Tak
      </button>
      <button class="btn btn-danger" v-on:click="cancelNavigation">
        Anuluj
      </button>
    </div>
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
  data: function() {
    return {
      displayWarning: false,
      navigationApproved: false,
      targetRoute: null
    }
  },
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
    },
    doNavigation() {
      this.navigationApproved = true;
      this.$router.push(this.targetRoute.path);
    },
    cancelNavigation() {
      this.navigationApproved = false;
      this.displayWarning = false;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.navigationApproved) {
      next();
    } else {
      this.targetRoute = to;
      this.displayWarning = true;
      next(false);
    }
  }
}
</script>