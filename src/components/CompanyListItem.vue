<template>
  <div class="company-list-item">
    <div>
      <div>{{company.district.name}}</div>
      <div>{{company.name}}</div>
      <div>{{company.category.name}}</div>
    </div>
    <dc-button
      class="pink-btn"
      @click="handleItemClick"
    >
      {{getButtonText}}
    </dc-button>
  </div>
</template>

<script>
  export default {
    name: 'CompanyListItem',
    props: {
      company: {},
    },
    methods: {
      handleItemClick () {
        this.$router.push({
          name: 'Offer',
          params: {
            companyId: this.company.id,
          },
        })
      },
    },
    computed: {
      getButtonText () {
        if (this.company.category.leadType === 'pricing') {
          return this.$t('companyListItem.button.offer')
        }
        return this.$t('companyListItem.button.appointment')
      },
    },
  }
</script>

<style lang="scss" src="./CompanyListItem.scss"></style>
