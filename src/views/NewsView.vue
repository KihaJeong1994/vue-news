<template>
  <div>
      <p v-for="item in fetchedNews" :key="item">
        <a v-bind:href="item.url">{{item.title}}</a>
        <small>
          {{item.time_ago}} by 
          <!-- <router-link v-bind:to="'/user/'+item.user">{{item.user}}</router-link> -->
          <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
          </small>
      </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters(['fetchedNews'])
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
    
  }
}
</script>

<style>

</style>