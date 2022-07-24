<template>
  <div>
    <h3 class="p-4 p-color">Hot Repos</h3>
    <b-table :busy.sync="isBusy" :items="fetchReposList" :fields="fieldNames" responsive hover>
      <template v-slot:cell(id)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(name)="{ item: { starsCount, name, ownerDetails: { profileUrl, avatarUrl } } }">
        <div>
          <b-avatar :src="avatarUrl" class="mr-3 shadow"></b-avatar>
          <b-link :href="profileUrl" target="_blank">{{ name }}</b-link>
          <b-badge pill variant="warning" class="mx-2 p-1"><span class="mx-2">
              <b-icon-star-fill class="mr-2" font-scale="1.5" />{{ formatPositiveNumbers(starsCount) }}
            </span></b-badge>
        </div>
      </template>
      <template #empty>
        <b-row class="mt-5 justify-content-md-center">
          <b-col cols="auto">
            <b-alert variant="secondary" show>
              <h4>
                There were not repositories created which have more than 1 star. Try changing one of the attributes on
                the search query:
              </h4>

              <ul>
                <li>Start date</li>
                <li>End date</li>
              </ul>
            </b-alert>
          </b-col>
        </b-row>
      </template>
    </b-table>
  </div>
</template>

<script>
import { RepoAPI } from '@/api'
import { formatPositiveNumbers } from '@/utils'
let lastMonthsDateRange = ''
export default {
  data: () => ({
    fieldNames: [
      {
        key: 'id',
        label: '#'
      },
      {
        key: 'name',
        label: 'Name',
        tdClass: 'text-nowrap'
      },
      {
        key: 'description',
        label: 'Description'
      },
    ],
    isBusy: false
  }),
  created() {
    const now = new Date()
    const lastDay = new Date(now.getFullYear(), now.getMonth(), 0)
    const firstDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), 1)
    lastMonthsDateRange = `${firstDay.getFullYear()}-${(firstDay.getMonth() + 1).toString().padStart(2, '0')}-${firstDay.getDate().toString().padStart(2, '0')}..${lastDay.getFullYear()}-${(firstDay.getMonth() + 1).toString().padStart(2, '0')}-${lastDay.getDate().toString().padStart(2, '0')}`
    setInterval(function () {
      this.fetchReposList()
    }, 2 * 60 * 1000);
  },
  methods: {
    formatPositiveNumbers,
    async fetchReposList() {
      this.isBusy = true
      try {
        const response = await RepoAPI.fetchReposList({ listCount: 5, lastMonthsDateRange, sortBy: 'stars' })
        console.log(response);
        this.isBusy = false
        return response
      } catch (error) {
        console.log(error);
        this.isBusy = false
        return []
      }

    }
  }
}
</script>
<style scoped>
.p-color {
  color: #1A345E
}
</style>