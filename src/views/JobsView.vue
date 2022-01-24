<template>
  <div>
      <p v-for="item in fetchedJobs" :key="item">
        <a v-bind:href="item.url">{{item.title}}</a>
        <small>{{item.time_ago}} by {{item.domain}}</small>
      </p>
  </div>
</template>

<script>
// import {fetchJobsList} from '../api/index'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      jobs : []
    }
  },
  computed:{
    ...mapGetters(['fetchedJobs'])
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>