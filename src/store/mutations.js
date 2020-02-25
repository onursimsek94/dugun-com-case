import {
  INCREASE_LOADING,
  DECREASE_LOADING,
  GET_COMPANIES,
  GET_COMPANIES_FORM,
  SET_OFFER_DETAIL,
} from './mutation-types'

export default {
  [INCREASE_LOADING] (state) {
    state.loading += 1
  },
  [DECREASE_LOADING] (state) {
    state.loading -= 1
  },
  [GET_COMPANIES] (state, { companyData }) {
    state.companies = companyData
  },
  [GET_COMPANIES_FORM] (state, { companyFormData }) {
    state.companiesForm.push(companyFormData)
  },
  [SET_OFFER_DETAIL] (state, { offerDetailData }) {
    state.offerDetail = offerDetailData
  },
}
