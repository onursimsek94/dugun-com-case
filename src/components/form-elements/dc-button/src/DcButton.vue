<template>
  <el-button
    type="button"
    class="dc-button"
    v-on="listeners"
  >
    <slot/>
  </el-button>
</template>

<script>
  import Vue from 'vue'
  import { DcMixin } from '@/mixins/DcElementsMixin'
  import ElButton from 'element-ui/lib/button'

  Vue.use(ElButton)

  export default {
    name: 'DcButton',
    mixins: [DcMixin],
  }
</script>
