import Vue from 'vue'
import {
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui'
import { i18n } from '@/plugins/vue-i18n'
import locale from 'element-ui/lib/locale'

locale.i18n((key, value) => i18n.t(key, value))

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$notify = options => {
  const customClass = `${options.type}-notification`

  Notification({
    position: 'top-right',
    duration: 3000,
    customClass,
    ...options,
  })
}
