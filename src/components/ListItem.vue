<template>
  <div>
      <ul class="news-list">
        <li v-for="item in listItems" :key="item" class="post">
          <div class="points">
            {{item.points || 0}}
          </div>
          <div>
            <p class="news-title">
                <template v-if="item.domain">
                    <a  v-bind:href="item.url">{{item.title}}</a>
                </template>
                <template v-else>
                    <router-link v-bind:to="`/item/${item.id}`" class="link-text">{{item.title}}</router-link>
                </template>
            </p>
            <small class="link-text">
              {{item.time_ago}} by 
              <template v-if="item.user">
              <!-- <router-link v-bind:to="'/user/'+item.user">{{item.user}}</router-link> -->
                <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
              </template>
              <template v-else>
                    <a v-bind:href="item.url">{{item.domain}}</a>
              </template>
            </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            name : this.$route.name,
        }
    },
  computed:{
      listItems(){
        let name = this.$route.name;
        if(name ==='news'){
            return this.$store.getters.fetchedNews;
        }else if(name ==='ask'){
            return this.$store.getters.fetchedAsk;
        }else{
            return this.$store.getters.fetchedJobs;
        }
      },

    // ...mapGetters({
    //     listItems:'fetchedNews'
    // })
  },
  created(){
    const name = this.$route.name;
    const nameUpper = name.toUpperCase();
    this.$store.dispatch(`FETCH_${nameUpper}`);
  }
}
</script>

<style scoped>

.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42B883;
}
.news-title{
  margin: 0;
}
.link-text{
  color : #828282
}
</style>