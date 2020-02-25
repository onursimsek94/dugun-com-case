import { BaseProxy } from '@/proxies/BaseProxy'

export class CompaniesProxy extends BaseProxy {
  constructor ({ companyId, parameters = {} } = {}) {
    let endpoint = 'companies'
    if (companyId) {
      endpoint += `/${companyId}/forms`
    }

    super({
      endpoint,
      parameters,
    })
  }
}
