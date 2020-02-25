<template>
  <dc-input
    :type="inputType"
    :name="field.fieldName"
    :rows="5"
    :rules="ruleGenerator"
    v-model="field.fieldValue"
  >
  </dc-input>
</template>

<script>
  export default {
    name: 'TextElement',
    props: {
      field: {},
    },
    computed: {
      inputType () {
        if (this.field.fieldType === 'textarea') {
          return 'textarea'
        } else if (this.field.fieldDataType === 'phone') {
          return 'number'
        }
        return 'text'
      },
      ruleGenerator () {
        const rules = []

        if (this.field.isRequired) {
          rules.push('required')
        }

        if (this.field.fieldDataType === 'email') {
          rules.push('email')
        } else if (this.field.fieldDataType === 'phone') {
          rules.push('min_value:0', 'min:10')
        }

        return rules.join('|')
      },
    },
  }
</script>
