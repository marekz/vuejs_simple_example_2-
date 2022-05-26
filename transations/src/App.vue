<template>
  <div class="m-2">
    <div class="text-center m-2">
      <div class="btn-group">
        <router-link tag="button" to="/display" exact-active-class="btn-warning" class="btn btn-secondary">
          Prosty wyświetlacz
        </router-link>
        <router-link tag="button" to="/list" exact-active-class="btn-info" class="btn btn-secondary">
          Generator list
        </router-link>
        <router-link tag="button" to="/numbers" exact-active-class="btn-success" class="btn btn-secondary">
          Liczby
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>