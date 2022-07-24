<template>
    <b-row>
        <b-col>
            <b-button class="refresh shadow-lg" id="hot_repo" @click="$refs.repoStars.fetchReposList()">REFRESH</b-button>
            <div class="shadow mt-4 custom-border">
                <repo-stars ref="repoStars"/>
            </div>
        </b-col>
        <b-col>
             <b-button class="refresh shadow-lg" id="hot_repo" @click="$refs.repoStars.getUsersList()">REFRESH</b-button>
            <div class="shadow mt-4 custom-border">
                <prolific-users ref="prolificUsers"/>
            </div>
        </b-col>
    </b-row>
</template>
<script>
import RepoStars from '@/components/RepoStars'
import ProlificUsers from '@/components/ProlificUsers'

export default {
    name: 'AppBodyStructure',
    components: {
        RepoStars,
        ProlificUsers
    }
}
</script>
<style scoped>
.refresh {
    float: right;
    position: absolute;
    right: 15px;
    top: 0px;
    font-size: 1rem;
    line-height: 1;
    padding: 1rem;
    background: #d3420d;
    border: 2px solid #d3420d;
    border-radius: 2px;
    min-width: 200px;
}

.custom-border {
    border-bottom: 10px solid #1A345E;
}
</style>