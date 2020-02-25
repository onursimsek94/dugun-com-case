<template>
  <div
    id="app"
    v-loading="isLoading"
  >
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'DugunComCase',
    computed: {
      ...mapGetters(['isLoading']),
    },
  }
</script>

<style lang="scss"></style>
