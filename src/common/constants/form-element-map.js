import TextElement from '@/components/TextElement'
import SelectElement from '@/components/SelectElement'
import DateElement from '@/components/DateElement'

const formElementMap = new Map()
formElementMap.set('text', TextElement)
formElementMap.set('textarea', TextElement)
formElementMap.set('select', SelectElement)
formElementMap.set('date', DateElement)

export { formElementMap }
