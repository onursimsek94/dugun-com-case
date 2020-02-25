<template>
  <div class="page-frame offer-detail-view">
    <div class="form-container">
      <div class="page-title">{{companyName}}</div>
      <div
        v-for="field in getOfferDetail.formData"
        :key="field.id"
      >
        <label>{{field.fieldLabel}}</label>
        <div>{{field.fieldValue}}</div>
      </div>

      <dc-button
        class="pink-btn"
        @click="goCompanyListView"
      >
        {{$t('offerDetail.button.approve')}}
      </dc-button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    name: 'OfferDetail',
    props: {
      companyId: {},
      offerId: {},
    },
    created () {
      if (!this.companies.length) {
        this.getCompanies()
      }
      this.checkProps()
      this.checkFormData()
    },
    methods: {
      checkProps () {
        if (!this.companyId || !this.offerId) {
          this.goCompanyListView()
        }
      },
      checkFormData () {
        if (!this.getOfferDetail) {
          this.goCompanyListView()
        }
      },
      goCompanyListView () {
        this.$router.push({
          name: 'CompanyList',
        })
      },
      ...mapActions(['getCompanies']),
    },
    computed: {
      companyName () {
        return this.getCompanyName(parseInt(this.companyId))
      },
      ...mapState(['companies']),
      ...mapGetters([
        'getCompanyName',
        'getOfferDetail',
      ]),
    },
  }
</script>

<style lang="scss" src="./OfferDetail.scss"></style>
