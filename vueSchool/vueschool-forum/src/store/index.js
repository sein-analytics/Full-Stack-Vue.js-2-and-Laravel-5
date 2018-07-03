import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      context.commit('setPost', {post, postId})
      context.commit('appendPostToThread', {threadId: post.threadId, postId})
      context.commit('appendPostToUser', {userId: post.userId, postId})
    },
    updateUser ({commit}, user) {
      commit('setUser', {userId: user['.key'], user})
    }
  },
  mutations: {
    setPost (state, {postId, post}) {
      Vue.set(state.posts, postId, post)
    },
    setUser (state, {userId, user}) {
      Vue.set(state.users, userId, user)
    },
    appendPostToThread (state, {postId, threadId}) {
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, {postId, userId}) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
