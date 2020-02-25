<template>
  <el-option
    v-on="listeners"
    v-bind="attrs"
    class="dc-option"
  >
    <slot
      v-for="slot in Object.keys($slots)"
      :name="slot"
      :slot="slot"
    />
    <template
      v-for="slot in Object.keys($scopedSlots)"
      :slot="slot"
      slot-scope="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
  </el-option>
</template>
<script>
  import Vue from 'vue'
  import ElOption from 'element-ui/lib/option'

  Vue.use(ElOption)

  export default {
    name: 'DcOption',
    inheritAttrs: false,
    data () {
      return {
        mutableValue: this.value,
      }
    },
    computed: {
      listeners () {
        const { ...listeners } = this.$listeners
        return listeners
      },
      attrs () {
        const { ...attrs } = this.$attrs
        return attrs
      },
    },
  }
</script>
