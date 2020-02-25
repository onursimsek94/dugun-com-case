export default {
  isLoading (state) {
    return state.loading > 0
  },
  getCompanyName (state) {
    return id => {
      const data = state.companies.find(item => item.id === id)
      return data ? data.name : id.toString()
    }
  },
  getOfferDetail (state) {
    return state.offerDetail
  },
}
