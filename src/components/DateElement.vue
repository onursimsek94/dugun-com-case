<template>
  <dc-date-picker
    :name="field.fieldName"
    :rules="ruleGenerator"
    format="dd MMM, yyyy"
    value-format="yyyy-MM-dd"
    v-model="field.fieldValue"
  >
  </dc-date-picker>
</template>

<script>
  export default {
    name: 'DateElement',
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
