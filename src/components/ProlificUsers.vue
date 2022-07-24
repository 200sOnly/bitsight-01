<template>
  <div>
    <h3 class="p-4 p-color">Prolific Users</h3>
    <b-table :busy.sync="isBusy" :items="getUsersList" :fields="fieldNames" responsive hover>
      <template v-slot:cell(id)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(name)="{ item: { starsCount, name, ownerDetails: { profileUrl, avatarUrl } } }">
        <div>
          <b-avatar :src="avatarUrl" class="mr-3 shadow"></b-avatar>
          <b-link :href="profileUrl" target="_blank">{{ name }}</b-link>
          <b-badge pill variant="info" class="mx-2 p-1"><span class="mx-2">
              <b-icon-person-plus-fill class="mr-2" font-scale="1.5" />{{ formatPositiveNumbers(starsCount) }}
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
let lastYearDateRange = ''
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
        key: 'followersUrl',
        label: 'Followers'
      },
    ],
    isBusy: false
  }),
  created() {
    const lastYear = new Date().getFullYear() - 1
    lastYearDateRange = `${lastYear}-01-01..${lastYear}-12-31`
    setInterval(function () {
      this.getUsersList()
    }, 2 * 60 * 1000);
  },
  methods: {
    formatPositiveNumbers,
    async getUsersList() {
      this.isBusy = true
      try {
        const response = await RepoAPI.fetchUsersList({ listCount: 5, dateRange: lastYearDateRange, sortBy: 'followers' })
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