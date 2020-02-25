import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'

export default {
  name: 'ValidationWrapper',
  render (createElement) {
    const vm = this
    return createElement('ValidationProvider', {
      props: {
        name: vm.$attrs.name,
        rules: vm.rules,
        immediate: vm.immediate,
        vid: vm.vid,
        events: vm.events,
        bails: vm.bails,
        debounce: vm.debounce,
      },
      scopedSlots: {
        default: props => {
          const $childs = []
          if (props.errors.length) {
            $childs.push(
              createElement(`${vm.tag}`, {
                props: {
                  content: props.errors[0],
                  type: 'danger',
                },
              }),
            )
          }
          $childs.push(vm.$slots.default)
          return createElement(`${vm.tag}`, {
            class: { ...props.classes },
          }, $childs)
        },
      },
    })
  },
  props: {
    rules: {
      type: String | Object,
    },
    tag: {
      type: String,
      default: 'div',
    },
    immediate: {
      type: Boolean,
    },
    vid: {
      type: String,
    },
    events: {
      type: Array,
      default: () => [],
    },
    bails: {
      type: Boolean,
    },
    debounce: {
      type: Number,
    },
  },
  components: {
    ValidationProvider,
  },
}
