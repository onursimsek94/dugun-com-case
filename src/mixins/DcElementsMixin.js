import ValidationWrapper from '@/components/form-elements/ValidationWrapper'

export const DcMixin = {
  props: {
    value: {},
    rules: {
      type: String | Object,
    },
    tag: {
      type: String,
      default: 'div',
    },
    vid: {},
  },
  components: {
    ValidationWrapper,
  },
  inheritAttrs: false,
  data () {
    return {
      mutableValue: this.value,
    }
  },
  computed: {
    listeners () {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
    attrs () {
      const { ...attrs } = this.$attrs
      return attrs
    },
    $element () {
      return this.$children[0].$children[0].$children[0]
    },
  },
  methods: {
    input (event) {
      this.$emit('input', event)
    },
  },
  watch: {
    value (val) {
      this.mutableValue = val
    },
  },
}
