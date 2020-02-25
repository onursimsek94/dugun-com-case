<template>
  <dc-select
    :name="field.fieldName"
    :rules="ruleGenerator"
    v-model="field.fieldValue"
  >
    <dc-option
      v-for="item in field.infoRequestFormOptions"
      :key="item.id"
      :label="item.optionText"
      :value="item.optionText"
    >
    </dc-option>
  </dc-select>
</template>

<script>
  export default {
    name: 'SelectElement',
    props: {
      field: {},
    },
    computed: {
      ruleGenerator () {
        return this.field.isRequired ? 'required' : ''
      },
    },
  }
</script>
