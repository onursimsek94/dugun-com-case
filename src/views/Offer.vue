<template>
  <div class="page-frame offer-view">
    <dc-form
      ref="offerForm"
      class="form-container"
    >
      <div class="page-title">{{companyName}}</div>
      <div
        v-for="field in form.formData"
        :key="field.id"
      >
        <label>{{field.fieldLabel}}</label>
        <component
          :is="getFormElement(field.fieldType)"
          :field="field"
        >
        </component>
      </div>

      <div class="action-buttons">
        <dc-button
          class="gray-btn"
          @click="handleBackClick"
        >
          {{$t('offer.button.back')}}
        </dc-button>
        <dc-button
          class="pink-btn"
          @click="handleGetOfferClick"
        >
          {{$t('offer.button.offer_button')}}
        </dc-button>
      </div>
    </dc-form>
  </div>
</template>

<script>
  import { v4 as uuid } from 'uuid'
  import { mapState, mapActions, mapGetters } from 'vuex'
  import { formElementMap } from '@/common/constants/form-element-map'

  export default {
    name: 'Offer',
    props: {
      companyId: {},
    },
    data () {
      return {
        form: {},
      }
    },
    created () {
      if (!this.companies.length) {
        this.getCompanies()
      }
      this.getForm()
    },
    methods: {
      async getForm () {
        try {
          this.form = await this.getCompaniesForm(this.companyId)
        } catch (e) {
          this.$notify({
            message: this.$t('general.message.error'),
            type: 'error',
          })
        }
      },
      getFormElement (fieldType) {
        return formElementMap.get(fieldType)
      },
      handleBackClick () {
        this.$router.push({
          name: 'CompanyList',
        })
      },
      handleGetOfferClick () {
        this.$refs.offerForm
          .validate()
          .then(validationStatus => {
            if (validationStatus) {
              const offerId = uuid()
              this.setOfferDetail({
                offerId,
                ...this.form,
              })

              this.$notify({
                message: this.$t('general.message.success'),
                type: 'success',
              })

              this.$router.push({
                name: 'OfferDetail',
                params: {
                  offerId,
                  companyId: this.companyId,
                },
              })
            } else {
              this.$notify({
                message: this.$t('general.message.validation_error'),
                type: 'error',
              })
            }
          })
      },
      ...mapActions([
        'getCompanies',
        'getCompaniesForm',
        'setOfferDetail',
      ]),
    },
    computed: {
      companyName () {
        return this.getCompanyName(parseInt(this.companyId))
      },
      ...mapState(['companies']),
      ...mapGetters(['getCompanyName']),
    },
  }
</script>

<style lang="scss" src="./Offer.scss"></style>
