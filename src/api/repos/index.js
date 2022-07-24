import Vue from 'vue'
import axios from 'axios'
import Mapper from '@/schema-definitions/mappers'

export const fetchReposList = async ({ listCount = 20, lastMonthsDateRange, sortBy = "stars" }) => {
    const { data: { items } } = await axios.get(Vue.urlBuilder.searchGitHubRepo({ lastMonthsDateRange, sortBy }))
    items.length = listCount
    return Mapper.RepoByStars(items)
}

export const fetchUsersList = async ({ listCount = 20, dateRange, sortBy = "followers" }) => {
    const { data: { items } } = await axios.get(Vue.urlBuilder.searchGitHubUser({ dateRange, sortBy }))
    items.length = listCount
    return Mapper.GitHubUsers(items)
}


