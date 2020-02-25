<script>
  import { ValidationObserver } from 'vee-validate/dist/vee-validate.full'

  export default {
    name: 'DcForm',
    components: {
      ValidationObserver,
    },
    props: {
      tag: {
        type: String,
        default: 'form',
      },
    },
    render (createElement) {
      const vm = this
      return createElement('ValidationObserver', {
        ref: 'vo',
        scopedSlots: {
          default: (props) => {
            return createElement(`${vm.tag}`, {
              class: { 'dc-form': true, ...props.classes },
            }, [
              createElement('header', {
                class: 'dc-form-header',
              }, vm.$slots.header),
              vm.$slots.default,
              createElement('footer', {
                class: 'dc-form-header',
              }, vm.$slots.footer),
            ])
          },
        },
      })
    },
    methods: {
      async validate (...args) {
        const result = await this.$children[0].validate(...args)
        return result
      },
      async reset (...args) {
        const result = await this.$children[0].reset(...args)
        return result
      },
    },
  }
</script>
