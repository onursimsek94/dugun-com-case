<template>
  <ValidationWrapper
    :name="attrs.name"
    :rules="rules"
    ref="vp"
    class="dc-select"
    :tag="tag"
    :vid="vid"
  >
    <el-select
      v-model="mutableValue"
      ref="select"
      @input="input"
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
    </el-select>
  </ValidationWrapper>
</template>
<script>
  import Vue from 'vue'
  import { DcMixin } from '@/mixins/DcElementsMixin'
  import ElSelect from 'element-ui/lib/select'

  Vue.use(ElSelect)

  export default {
    name: 'DcSelect',
    mixins: [DcMixin],
  }
</script>
