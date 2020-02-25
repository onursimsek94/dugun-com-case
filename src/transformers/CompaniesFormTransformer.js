export class CompaniesFormTransformer {
  static fetch (companyId, data) {
    const formData = data
      .sort((a, b) => a.orderNum - b.orderNum)
      .map(item => {
        item.fieldValue = null
        if (item.fieldType === 'select') {
          item.infoRequestFormOptions.splice(0, 1)
        }

        if (item.fieldDataType === 'weddate' || item.fieldDataType === 'date') {
          item.fieldType = 'date'
        }

        return item
      })

    return {
      companyId,
      formData,
    }
  }
}
