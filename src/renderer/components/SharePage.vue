<template>
  <div>share</div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    created: function () {
      this.$store.dispatch('showStatusBar', false)
    }
  }
</script>

<style>
</style>
