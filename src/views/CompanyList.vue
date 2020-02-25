<template>
  <div class="page-frame company-list-view">
    <company-list-item
      v-for="item in companyList"
      :key="item.id"
      :company="item"
    >
    </company-list-item>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import CompanyListItem from '@/components/CompanyListItem'

  export default {
    name: 'CompanyList',
    components: {
      CompanyListItem,
    },
    data () {
      return {
        companyList: [],
      }
    },
    created () {
      this.getCompaniesData()
    },
    methods: {
      async getCompaniesData () {
        try {
          this.companyList = await this.getCompanies()
        } catch (e) {
          this.$notify({
            message: this.$t('general.message.error'),
            type: 'error',
          })
        }
      },
      ...mapActions(['getCompanies']),
    },
  }
</script>
