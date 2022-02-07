import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserData, fetchItemData, fetchList } from '../api/index'
export default { // actions 비동기 method 처리
  //promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data) // 동기 method는 반드시 mutation에서 실행
  //       return response
  //     })
  //     .catch(error => console.log(error))
  // },

  //async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
    
  },
  async FETCH_JOBS(context){
    try {
      const response = fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK(context) {
      const response = await fetchAskList();
      context.commit('SET_ASK', response.data) // 동기 method는 반드시 mutation에서 실행
      return response
  },
  FETCH_USER(context, id) {
    return fetchUserData(id)
      .then(response => {
        context.commit('SET_USER', response.data)
      })
  },
  FETCH_ITEM(context, id) {
    return fetchItemData(id)
      .then(response => {
        context.commit('SET_ITEM', response.data)
      })
  },
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data)
    return response;
  }
}