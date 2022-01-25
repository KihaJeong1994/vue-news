import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserData, fetchItemData, fetchList } from '../api/index'
export default { // actions 비동기 method 처리
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data) // 동기 method는 반드시 mutation에서 실행
        return response
      })
      .catch(error => console.log(error))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data) // 동기 method는 반드시 mutation에서 실행
        return response
      })
      .catch(error => console.log(error))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit('SET_ASK', response.data) // 동기 method는 반드시 mutation에서 실행
        return response
      })
      .catch(error => console.log(error))
  },
  FETCH_USER(context, id) {
    fetchUserData(id)
      .then(response => {
        context.commit('SET_USER', response.data)
      })
  },
  FETCH_ITEM(context, id) {
    fetchItemData(id)
      .then(response => {
        context.commit('SET_ITEM', response.data)
      })
  },
  FETCH_LIST(context, pageName) {
    fetchList(pageName)
      .then(response => {
        context.commit('SET_LIST', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}