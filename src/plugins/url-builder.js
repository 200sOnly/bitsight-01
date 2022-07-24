const UrlBuilder = {}
UrlBuilder.install = (Vue) => {
    const BASE_URL = process.env.VUE_APP_BASE_URL

    UrlBuilder.searchGitHubRepo = ({ lastMonthsDateRange, sortBy }) => `${BASE_URL}/search/repositories?q=stars:>1&sort=${sortBy}&created:${lastMonthsDateRange}`
    UrlBuilder.searchGitHubUser = ({ dateRange, sortBy }) => `${BASE_URL}/search/users?q=followers:>1&sort=${sortBy}&created:${dateRange}`

    Vue.urlBuilder = UrlBuilder
}
export default UrlBuilder
