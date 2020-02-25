import {
  INCREASE_LOADING,
  DECREASE_LOADING,
  GET_COMPANIES,
  GET_COMPANIES_FORM,
  SET_OFFER_DETAIL,
} from './mutation-types'
import { CompaniesProxy } from '@/proxies/CompaniesProxy'
import { CompaniesTransformer } from '@/transformers/CompaniesTransformer'
import { CompaniesFormTransformer } from '@/transformers/CompaniesFormTransformer'

const request = {
  companies: null,
  companiesForm: null,
}

export default {
  increaseLoading ({ commit }) {
    commit(INCREASE_LOADING)
  },
  decreaseLoading ({ commit }) {
    commit(DECREASE_LOADING)
  },
  getCompanies ({ commit, state, dispatch }) {
    if (request.companies) {
      return request.companies
    }
    return new Promise((resolve, reject) => {
      dispatch('increaseLoading')

      request.companies = new CompaniesProxy()
        .all()

      request.companies
        .then(response => {
          const companyData = CompaniesTransformer.fetch(state.companies, response)

          commit(GET_COMPANIES, { companyData })
          resolve(companyData)
        })
        .catch(reject)
        .finally(() => {
          request.companies = null
          dispatch('decreaseLoading')
        })
    })
  },
  getCompaniesForm ({ commit, state, dispatch }, companyId) {
    if (request.companiesForm) {
      return request.companiesForm
    }
    return new Promise((resolve, reject) => {
      const companyData = state.companiesForm.find(item => item.companyId === companyId)

      if (companyData) {
        resolve(JSON.parse(JSON.stringify(companyData)))
      } else {
        dispatch('increaseLoading')
        request.companiesForm = new CompaniesProxy({ companyId })
          .all()

        request.companiesForm
          .then(response => {
            const companyFormData = CompaniesFormTransformer.fetch(companyId, response)

            commit(GET_COMPANIES_FORM, { companyFormData })
            resolve(JSON.parse(JSON.stringify(companyFormData)))
          })
          .catch(reject)
          .finally(() => {
            request.companiesForm = null
            dispatch('decreaseLoading')
          })
      }
    })
  },
  setOfferDetail ({ commit }, offerDetailData) {
    commit(SET_OFFER_DETAIL, { offerDetailData })
  },
}
