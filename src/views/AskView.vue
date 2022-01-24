<template>
  <div>
      <p v-for="item in fetchedAsk" :key="item">
        <a v-bind:href="item.url">{{item.title}}</a>
        <small>
          {{item.time_ago}} by 
          <router-link v-bind:to="`/item/${item.id}`">{{item.user}}</router-link>
        </small>
      </p>
      <ul class="news-list">
        <li v-for="item in fetchedAsk" :key="item" class="post">
          <div class="points">
            {{item.points}}
          </div>
          <div>
            <p class="news-title">
              <a v-bind:href="item.url">{{item.title}}</a>
            </p>
            <small class="link-text">
              {{item.time_ago}} by 
              <!-- <router-link v-bind:to="'/user/'+item.user">{{item.user}}</router-link> -->
              <router-link v-bind:to="`/item/${item.id}`" class="link-text">{{item.user}}</router-link>
            </small>
          </div>
        </li>
      </ul>
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