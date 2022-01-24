<template>
  <div>
      <p v-for="item in fetchedAsk" :key="item">
        <a v-bind:href="item.url">{{item.title}}</a>
        <small>
          {{item.time_ago}} by 
          <router-link v-bind:to="`/item/${item.id}`">{{item.user}}</router-link>
        </small>
      </p>
  </div>
</template>

<script>
// import {fetchAskList} from '../api/index'
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      ask : []
    }
  },
  computed:{
    ...mapGetters(['fetchedAsk'])
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>