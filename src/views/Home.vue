<template>
<div>
    <app-header />
<b-container fluid>
    <app-body class="my-5 px-5"/>
    </b-container>
    <app-footer />
</div>
</template>
<script>
  import AppHeader from '@/components/core/AppHeader'
  import AppBody from '@/components/body/RepoTables'
  import AppFooter from '@/components/core/AppFooter'

  export default {
    name: 'ConfigureProduct',
    components: {
      AppHeader,
      AppFooter,
      AppBody
    }
  }
</script>
<style lang="scss" scoped></style>
