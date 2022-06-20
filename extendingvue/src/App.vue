<template>
  <div class="m-2">
    <Numbers/>
    <Subtraction/>
  </div>
</template>

<script>
import Numbers from "@/components/Numbers";
import Subtraction from "@/components/Subtraction";
export default {
  name: 'App',
  components: {
    Numbers, Subtraction
  }
}
</script>