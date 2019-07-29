import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.database()
const postsRef = db.ref('/posts')

export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => {
    return state.posts
  }
}

export const actions = {
  INIT_POSTS() {
    firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('posts', postsRef)
    })
  }
}