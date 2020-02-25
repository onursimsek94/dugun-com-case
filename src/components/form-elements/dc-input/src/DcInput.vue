<template>
  <ValidationWrapper
    :name="attrs.name"
    :rules="rules"
    class="dc-input"
    :tag="tag"
    :vid="vid"
  >
    <el-input
      v-model="mutableValue"
      @input="input"
      v-on="listeners"
      v-bind="attrs"
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
    </el-input>
  </ValidationWrapper>
</template>
<script>
  import Vue from 'vue'
  import { DcMixin } from '@/mixins/DcElementsMixin'
  import ElInput from 'element-ui/lib/input'

  Vue.use(ElInput)

  export default {
    name: 'DcInput',
    mixins: [DcMixin],
  }
</script>
