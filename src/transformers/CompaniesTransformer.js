export class CompaniesTransformer {
  static fetch (companies, response) {
    const companyIds = companies.map(item => item.id)
    const filteredCompanies = response.filter(item => !companyIds.includes(item.id))

    return [
      ...companies,
      ...filteredCompanies,
    ]
  }
}
