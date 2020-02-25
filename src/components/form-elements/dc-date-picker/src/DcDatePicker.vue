<template>
  <ValidationWrapper
    :name="attrs.name"
    :rules="rules"
    class="dc-date-picker"
    :tag="tag"
    :vid="vid"
  >
    <el-date-picker
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
    </el-date-picker>
  </ValidationWrapper>
</template>

<script>
  import Vue from 'vue'
  import { DcMixin } from '@/mixins/DcElementsMixin'
  import ElDatePicker from 'element-ui/lib/date-picker'

  Vue.use(ElDatePicker)

  export default {
    name: 'DcDatePicker',
    mixins: [DcMixin],
  }
</script>
